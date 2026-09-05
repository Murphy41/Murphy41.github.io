"""Adapt the website CV data for RenderCV without changing the website source.

Run from the repository root. Keep the output next to the input so RenderCV's
settings paths continue to resolve relative to _data.
"""

import argparse
from copy import deepcopy
from pathlib import Path
import re

import yaml


def normalize_date(value):
    if isinstance(value, str):
        if value.lower() == "present":
            return "present"
        if re.fullmatch(r"\d{4}-\d{1,2}", value):
            year, month = value.split("-")
            return f"{year}-{int(month):02d}"
    return value


def convert_entry(section, source):
    entry = {key: deepcopy(value) for key, value in source.items() if value not in (None, "", [])}
    entry = {key: value.strip() if isinstance(value, str) else value for key, value in entry.items()}
    if section == "Education":
        degree = entry.pop("studyType")
        abbreviation = re.search(r"\(([^()]+)\)$", degree)
        entry["degree"] = abbreviation.group(1) if abbreviation else degree
        highlights = entry.setdefault("highlights", [])
        if entry.get("score"):
            highlights.append(f"Score: {entry['score']}")
        highlights.extend(entry.pop("courses", []))
        entry.pop("score", None)
        entry.pop("url", None)
    elif section == "Awards":
        entry = {
            "name": entry["title"],
            "date": entry.get("date"),
            "summary": entry.get("awarder"),
        }
    elif section == "Publications":
        entry["journal"] = entry.pop("publisher")
        entry["date"] = entry.pop("releaseDate")
        entry["authors"] = [
            author.strip()
            for group in entry["authors"]
            for author in group.split(" and ")
        ]
    elif section == "Skills":
        entry = {"label": entry["name"], "details": entry["keywords"]}
    elif section not in ("Experience", "Volunteer", "Research Experience"):
        raise ValueError(f"Add an explicit RenderCV mapping for section: {section}")

    for key in ("date", "start_date", "end_date"):
        if key in entry:
            entry[key] = normalize_date(entry[key])
    # A graduation year alone is an event date, not an incomplete date range.
    if "end_date" in entry and "start_date" not in entry:
        entry["date"] = entry.pop("end_date")
    return {key: value for key, value in entry.items() if value not in (None, "", [])}


def convert(document):
    source = document["cv"]
    cv = {
        key: deepcopy(source[key])
        for key in ("name", "email", "location", "phone", "website", "social_networks")
        if source.get(key)
    }
    if source.get("label"):
        cv["headline"] = source["label"]
    cv["sections"] = {
        section: [convert_entry(section, entry) for entry in entries]
        for section, entries in source["sections"].items()
    }
    return {"cv": cv}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    if args.source.resolve() == args.output.resolve():
        parser.error("Output must differ from the website CV source")
    document = yaml.safe_load(args.source.read_text())
    args.output.write_text(yaml.safe_dump(convert(document), sort_keys=False, allow_unicode=True))

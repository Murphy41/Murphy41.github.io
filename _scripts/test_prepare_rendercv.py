"""Regression checks for the website-to-RenderCV boundary."""

from copy import deepcopy
from pathlib import Path
import unittest

import yaml

from prepare_rendercv import convert, convert_entry


class RenderCVConversionTests(unittest.TestCase):
    def test_real_cv_preserves_source_and_all_entries(self):
        source = yaml.safe_load((Path(__file__).parents[1] / "_data/cv.yml").read_text())
        original = deepcopy(source)
        converted = convert(source)["cv"]
        self.assertEqual(source, original)
        for section, entries in source["cv"]["sections"].items():
            self.assertEqual(len(converted["sections"][section]), len(entries))
        self.assertEqual(converted["headline"], source["cv"]["label"])
        self.assertNotIn("address", converted)
        self.assertIn("Unmanned Systems, 2023", converted["sections"]["Research Experience"][0]["highlights"][1])

    def test_graduation_only_is_not_an_invented_date_range(self):
        entry = convert_entry("Education", {"institution": "Liverpool", "area": "Engineering", "studyType": "BEng", "end_date": 2016})
        self.assertEqual(entry["date"], 2016)
        self.assertNotIn("start_date", entry)
        self.assertNotIn("end_date", entry)
        self.assertEqual(entry["degree"], "BEng")

    def test_present_and_month_normalization(self):
        entry = convert_entry("Experience", {"company": "University", "position": "Tutor", "start_date": "2021-9", "end_date": "Present"})
        self.assertEqual(entry["start_date"], "2021-09")
        self.assertEqual(entry["end_date"], "present")

    def test_publication_authors_and_venue_survive(self):
        entry = convert_entry("Publications", {"title": "Paper", "authors": ["Xu, Yangmengfei and Tan, Ying"], "publisher": "Journal", "releaseDate": 2026})
        self.assertEqual(entry["authors"], ["Xu, Yangmengfei", "Tan, Ying"])
        self.assertEqual(entry["journal"], "Journal")
        self.assertEqual(entry["date"], 2026)

    def test_unknown_section_requires_mapping(self):
        with self.assertRaises(ValueError):
            convert_entry("New Section", {"name": "Keep this content"})


if __name__ == "__main__":
    unittest.main()

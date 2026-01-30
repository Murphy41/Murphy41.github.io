// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-officially-commenced-my-phd-at-the-university-of-melbourne-thrilled-to-work-in-the-human-robotics-lab-under-the-supervision-of-prof-denny-oetomo-and-prof-ying-tan",
          title: '🚀 Officially commenced my PhD at the University of Melbourne! Thrilled to work...',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-rowden-white-scholarship-grateful-for-this-prestigious-recognition-and-additional-support-for-my-research",
          title: '🏆 Honored to receive the Rowden White Scholarship! Grateful for this prestigious recognition...',
          description: "",
          section: "News",},{id: "news-represented-the-human-robotics-lab-at-the-university-science-festival-and-open-day-my-4th-year-volunteering-demoing-the-emu-rehabilitation-robot-featured-in-our-tnsre-paper",
          title: '🤖 Represented the Human Robotics Lab at the University Science Festival and Open...',
          description: "",
          section: "News",},{id: "news-our-paper-pypose-v0-6-the-imperative-programming-interface-for-robotics-has-been-accepted-to-the-iros-2023-ippc-workshop-pypose-is-our-open-source-library-that-enables-seamless-end-to-end-robot-learning-by-combining-physics-based-optimization-with-deep-learning-check-it-here",
          title: '🎉 Our paper “PyPose v0.6: The imperative programming interface for robotics” has been...',
          description: "",
          section: "News",},{id: "news-️-served-the-local-community-as-a-volunteer-judge-for-the-design-thinking-challenge-at-roberts-mccubbin-primary-school-it-was-inspiring-to-see-students-from-26-schools-come-together-to-solve-green-energy-problems",
          title: '⚖️ Served the local community as a volunteer judge for the Design Thinking...',
          description: "",
          section: "News",},{id: "news-successfully-passed-my-phd-confirmation-officially-confirmed-as-a-phd-candidate-and-excited-to-push-forward-with-the-next-stage-of-my-research",
          title: '✅ Successfully passed my PhD Confirmation! Officially confirmed as a PhD candidate and...',
          description: "",
          section: "News",},{id: "news-site-investigation-in-western-australia",
          title: 'Site Investigation in Western Australia',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-03-20-wa.html";
            },},{id: "news-my-5th-year-volunteering-had-a-blast-demoing-the-emu-rehabilitation-robot-at-both-the-university-open-day-and-mechanical-engineering-open-house",
          title: '🤖 My 5th year volunteering! Had a blast demoing the EMU rehabilitation robot...',
          description: "",
          section: "News",},{id: "news-field-deployment-amp-my-fifo-experience",
          title: 'Field Deployment &amp;amp; My FIFO Experience',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-05-wa.html";
            },},{id: "news-big-congrats-to-my-capstone-students-chethaka-jarod-and-xinyu-for-winning-the-mechatronics-engineering-merit-award-at-the-2024-endeavour-exhibition",
          title: '🏆 Big congrats to my capstone students—Chethaka, Jarod, and Xinyu—for winning the Mechatronics...',
          description: "",
          section: "News",},{id: "news-our-paper-from-isolation-to-connection-community-service-robots-for-social-cohesion-and-sustainability-has-been-accepted-to-the-hri-2025-student-design-competition-track-check-it-here",
          title: '📄 Our paper “From Isolation to Connection: Community Service Robots for Social Cohesion...',
          description: "",
          section: "News",},{id: "news-our-paper-modeling-higher-order-human-beliefs-using-the-justified-perspective-model-has-been-accepted-to-the-chi-2025-late-breaking-work-check-it-here",
          title: '📄 Our paper “Modeling Higher-order Human Beliefs Using the Justified Perspective Model” has...',
          description: "",
          section: "News",},{id: "news-hri-2025-trip-amp-sustainability-recognition",
          title: 'HRI 2025 Trip &amp;amp; Sustainability Recognition',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-07-hri-conf.html";
            },},{id: "news-sharing-our-research-on-modeling-higher-order-human-beliefs-at-chi-2025",
          title: 'Sharing Our Research on Modeling Higher-order Human Beliefs at CHI 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-01-chi-conf.html";
            },},{id: "news-i-had-a-blast-volunteering-at-both-the-uom-open-day-and-the-mechanical-engineering-open-house-this-week-it-was-great-representing-ausdroid-and-the-human-robotics-lab-demoing-our-robots-and-connecting-with-prospective-students-and-the-public",
          title: '🤖✨ I had a blast volunteering at both the UoM Open Day and...',
          description: "",
          section: "News",},{id: "news-the-capstone-team-i-supervised-chris-shen-zining-xu-yue-song-won-the-merit-award-in-mechatronics-at-endeavour-2025-for-their-work-on-human-aware-autonomous-mining-vehicles",
          title: '🏆 The capstone team I supervised (Chris Shen, Zining Xu, Yue Song) won...',
          description: "",
          section: "News",},{id: "news-workshop-presentation-amp-highlights-from-iros-2025",
          title: 'Workshop Presentation &amp;amp; Highlights from IROS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-31-iros-conf.html";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Yangmengfei%20Xu.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6E%67%6D%65%6E%67%66%65%69@%75%6E%69%6D%65%6C%62.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xGVR6cQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Khalid Bouskou",
  title: "Hi all, I'm Khalid",
  subTitle: emoji(
    "Self-driven, quick starter 🚀 passionate data analyst with a curious mind who enjoys solving a complex and challenging real-world problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Fb80zf4FTUAlrtcO6kELnYLTsZT3toqc/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/K-Bouskou",
  linkedin: "https://www.linkedin.com/in/khalid-bouskou/",
  gmail: "Khalido.Bouskou@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA ANALYST WHO WANTS TO ANWSER EVERY REAL WORLD QUESTION",
  skills: [
    emoji("⚡ Python Library :   Pandas | Numpy | Plotly | Matplotlib "),
    emoji("⚡ SQL (Structured Query Langauge) : Microsoft SQL Server | Google BigQuery "),
    emoji("⚡ Data Aggregation | Cleaning | Calculations | Ethics | Visualization | Structured Thinking"),
    emoji("⚡ Tools : PowerBi | Tableau | Jupyter Notebook | Github")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    //{
      //skillName: "html-5",
      //fontAwesomeClassname: "fab fa-html5"
    //},
    {
      skillName: "R Programming",
      fontAwesomeClassname: "fab fa-r-project"
    },
    //{
      //skillName: "sass",
      //fontAwesomeClassname: "fab fa-sass"
    //},
    //{
      //skillName: "JavaScript",
      //fontAwesomeClassname: "fab fa-js"
    //},
    //{
      //skillName: "reactjs",
      //fontAwesomeClassname: "fab fa-react"
    //},
    //{
      //skillName: "nodejs",
      //fontAwesomeClassname: "fab fa-node"
    //},
    //{
      //skillName: "swift",
      //fontAwesomeClassname: "fab fa-swift"
    //},
    //{
      //skillName: "npm",
      //fontAwesomeClassname: "fab fa-npm"
    //},
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    //{
      //skillName: "aws",
      //fontAwesomeClassname: "fab fa-aws"
    //},
    //{
      //skillName: "firebase",
      //fontAwesomeClassname: "fas fa-fire"
    //},
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    //{
      //skillName: "docker",
      //fontAwesomeClassname: "fab fa-docker"
    //}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ALWAHDA",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME PROJECT I WORK IN .",
  projects: [
    {
      image: require("./assets/images/Bike-Share.jpg"),
      projectName: "Google Case Study",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Project In Github",
          url: "https://github.com/K-Bouskou/Project-Portfolio/tree/main/1-%20Google-Case-Study"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Austin-Traffic.jpg"),
      projectName: "Austin Traffic Accident",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Project in Github",
          url: "https://github.com/K-Bouskou/Project-Portfolio/tree/main/2-%20Austin%20Traffic%20Accident"
        }
      ]
    },
    {
      image: require("./assets/images/Chicago-Crime.jpg"),
      projectName: "Chicago Crime Before & After Covid-19",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Project In Github",
          url: "https://github.com/K-Bouskou/Project-Portfolio/tree/main/3-%20Chicago%20Crime%20Before%20%26%20After%20Covid-19"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle:
        "November 2021 - Present",
      image: require("./assets/images/Google-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/WUTJ2QA5BBFK"
        },
      ]
    },
    {
      title: "Learning Python (2020)",
      subtitle:
        "December 2021 - Present",
      image: require("./assets/images/linkedin-learning.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/5bb78f8e55d16ccfdf639dfe81d3e78cb9ce5e35678612b4d7aa30ed3f4b4bc1"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-3243454077",
  //email_address: "Khalido.Bouskou@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

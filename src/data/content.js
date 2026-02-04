export const portfolioData = {
  hero: {
    name: "Yesu Doss X",
    title: "Full-Stack Software Engineer",
    subtitle: "Building scalable web applications, RESTful APIs, and responsive UIs with Python & React.",
    tech: ["Python", "ReactJS", "AWS", "Azure"],
    cta: {
      projects: "View Projects",
      resume: "Download Resume",
      contact: "Contact Me",
    },
  },
  about: {
    title: "About Me",
    summary:
      "I am a Fullstack Developer with 5 years of experience building scalable web applications. My core expertise lies in Python (Flask, Django, FastAPI) for backend architecture and ReactJS for creating responsive user interfaces. I have a proven track record of delivering robust solutions in Agile teams, deploying on cloud platforms like AWS and Azure, and solving complex engineering challenges with clean architecture.",
    highlights: [
      "5 years of experience in full-stack development",
      "Specialized in RESTful APIs, Microservices, and Cloud Deployment",
      "Skilled in building HIPAA-compliant healthcare applications",
      "Passion for learning new technologies and clean code practices",
    ],
  },
  skills: {
    title: "Skills & Tech Stack",
    categories: [
      {
        name: "Languages",
        items: ["Python", "JavaScript"],
      },
      {
        name: "Frameworks",
        items: ["Django", "FastAPI", "Flask", "ReactJS", "ExpressJS", "GraphQL", "Odoo"],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB"],
      },
      {
        name: "Cloud",
        items: ["AWS (S3, SQS, EC2, Cognito)", "Azure (Blob, Bus, ACR)"],
      },
      {
        name: "Tools & DevOps",
        items: ["Docker", "Node.js", "Git", "GitHub", "Bitbucket", "VS Code"],
      },
      {
        name: "Testing",
        items: ["Pytest", "Jest"],
      },
    ],
  },
  projects: [
    {
      title: "COVERA",
      description: "A healthcare application for managing Patient Health Information (PHI) via microservices. Handles authorization, DICOM uploads, and report management ensuring HIPAA compliance.",
      tech: ["Python", "Flask", "FastAPI", "ReactJS", "PostgreSQL", "AWS"],
      features: [
        "Microservices architecture for PHI management",
        "Secure DICOM image uploads and processing",
        "Role-based authorization and compliance tracking",
      ],
      links: {
        github: "https://github.com/yesudoss", // Updated generic link as specific repo wasn't provided
        demo: null,
      },
    },
    {
      title: "CRISTOPLUS",
      description: "A dynamic church management system facilitating giving, calendar synchronization, and member administration with tailored user roles.",
      tech: ["Python", "Django", "GraphQL", "ReactJS"],
      features: [
        "Dynamic calendar and event synchronization",
        "Member administration and role management",
        "Seamless donation and giving tracking",
      ],
      links: {
        github: "https://github.com/yesudoss",
        demo: null,
      },
    },
    {
      title: "KAPTRACK",
      description: "A dynamic form-building solution enabling the creation of customizable forms and reports for data-driven decision making.",
      tech: ["Python", "Django", "GraphQL", "ReactJS"],
      features: [
        "Customizable form builder engine",
        "Dynamic report generation",
        "Seamless data integration interface",
      ],
      links: {
        github: "https://github.com/yesudoss",
        demo: null,
      },
    },
    {
      title: "MEEPL",
      description: "Web-based HR management app streamlining onboarding, leave management, and ATS. Built on the PERN stack with microservices.",
      tech: ["Node.js", "ExpressJS", "ReactJS", "PostgreSQL"],
      features: [
        "Microservices architecture (PERN stack)",
        "Automated Applicant Tracking System (ATS)",
        "Leave management and onboarding workflows",
      ],
      links: {
        github: "https://github.com/yesudoss",
        demo: null,
      },
    },
    {
      title: "ELITE DISTILLERY MANAGEMENT",
      description: "Industry ERP streamlining campus processes including Purchase, Sales, Manufacturing, Inventory, and Quality Control.",
      tech: ["Python", "Odoo", "PostgreSQL"],
      features: [
        "Comprehensive ERP modules for manufacturing",
        "Inventory / Blending / Quality control tracking",
        "Seamless organizational management",
      ],
      links: {
        github: "https://github.com/yesudoss",
        demo: null,
      },
    },
  ],
  experience: {
    title: "Professional Experience",
    jobs: [
      {
        company: "RAVSoft Solutions Pvt. Ltd.",
        role: "Software Engineer",
        period: "March 2024 – Present",
        description: "Developing scalable fullstack applications for sensitive Patient Health Information (PHI), ensuring HIPAA compliance.",
        achievements: [
          "Designed microservices using Flask and FastAPI, reducing API latency by 30%.",
          "Integrated AWS/Azure services (S3, Blob Storage) for scalable file storage.",
          "Utilized Appsmith for internal tools, reducing manual operational effort by 40%.",
          "Worked in Agile sprints, maintaining a 95% sprint success rate.",
        ],
      },
      {
        company: "Boscosoft Technologies Pvt. Ltd.",
        role: "Software Engineer",
        period: "Jan 2021 – March 2024",
        description: "Built and deployed fullstack applications using Django, Flask, and ReactJS for various industries.",
        achievements: [
          "Implemented GraphQL APIs, improving frontend data fetching performance by 25%.",
          "Developed HR and ERP modules, cutting HR processing time by 50%.",
          "Created dynamic form-builder systems and custom reporting tools.",
          "Achieved 85% code coverage with Pytest and Jest unit/integration tests.",
          "Mentored team members and performed code reviews to maintain quality.",
        ],
      },
    ],
  },
  contact: {
    email: "yesudossx@gmail.com",
    phone: "+91 9786047451",
    linkedin: "https://www.linkedin.com/in/yesu-doss-x-847191197/",
    github: "https://github.com/yesudoss",
  },
};

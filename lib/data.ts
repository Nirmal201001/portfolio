import focusPowerImage from "@/assets/images/focus-power.png"

const startDate = new Date('2023-06-01');
const currentDate = new Date();
const diffInYears = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
const yearsOfExp = Math.floor(diffInYears);
const expString = `${yearsOfExp}+`;

export const portfolioData = {
  name: "Nirmal Kushwah",
  role: "Software Engineer – Full Stack",
  specialties: ["React", "Node.js", "FastAPI"],
  location: "Ahmedabad, India",
  email: "nirmalkushwah2010@gmail.com",
  phone: "+91 7984692561",
  github: "https://github.com/Nirmal201001",
  linkedin: "https://www.linkedin.com/in/nirmal-kushwah-9b65a0201/",
  resumeUrl: "https://drive.google.com/file/d/1dN3i8XXWu9IWzucRNSbvh1rXul9jtdzk/view?usp=sharing",
  about: `Software Engineer with ${expString} years of professional experience delivering enterprise-grade full-stack web applications using React.js, Next.js, Node.js, FastAPI, and PostgreSQL. Proven expertise in building scalable frontend architectures, secure REST and GraphQL APIs, and cloud-integrated systems on AWS.`,
  experienceYears: expString,
  philosophy: "I believe in building software that is not just functional, but also resilient and maintainable. My approach centers on clean architecture, performance optimization, and a user-first mindset. I strive to bridge the gap between complex backend logic and seamless frontend experiences.",
  goals: "My goal is to continue pushing the boundaries of what's possible on the web, exploring emerging technologies like AI-driven interfaces and distributed systems, while mentoring junior developers and contributing to the open-source community.",

  experience: [
    {
      company: "Citrusbug Technolabs",
      location: "Ahmedabad, India",
      role: "Software Engineer (Full Stack)",
      period: "June 2023 – Present",
      description: [
        "Designed, developed, and maintained enterprise-grade full-stack applications using React.js, Next.js, and Node.js.",
        "Built and optimized REST and GraphQL APIs with role-based access control using AWS Cognito and Firebase Authentication.",
        "Integrated AWS S3 and MinIO for secure, scalable media storage and retrieval.",
        "Implemented cloud-based email automation workflows using SendGrid.",
        "Improved frontend performance and SEO by leveraging Next.js server-side rendering and static generation."
      ]
    }
  ],

  projects: [
    {
      title: "Focus Power",
      subtitle: "Healthcare Platform",
      tech: ["React.js", "Django", "PostgreSQL", "AWS"],
      description: "FocusPower is a leadership platform that helps businesses manage goals, KPIs, planning, and team performance in one place.",
      longDescription: "FocusPower is a business leadership and execution platform that enables organizations to manage strategic goals, KPIs, initiatives, planning, performance reviews, feedback, and leadership workflows from a single dashboard. It helps teams stay aligned, improve accountability, and execute business strategies more effectively.",
      image: focusPowerImage,
      link: "https://focuspower.co/",
      githubUrl: ""
    },
    {
      title: "ValeneHealth",
      subtitle: "Healthcare Platform",
      tech: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Deepgram", "Azure"],
      description: "Developed responsive and reusable UI components for healthcare workflows, dashboards, and appointment management. Optimized application performance and SEO using Next.js rendering strategies.",
      longDescription: "ValeneHealth is a comprehensive healthcare management platform designed to streamline patient-doctor interactions. I led the frontend development using Next.js, implementing complex scheduling algorithms and secure patient data handling. The platform supports real-time updates via WebSockets and features a highly accessible UI for diverse user groups.",
      githubUrl: ""
    },
    {
      title: "Plutopal",
      subtitle: "E-commerce & Livestreaming Platform",
      tech: ["React.js", "Node.js", "MongoDB", "AWS S3", "AWS Cognito", "GetStream.io"],
      description: "Worked as a full-stack engineer delivering core modules including product workflows, checkout systems, and livestreaming UI. Built scalable backend services using Node.js following microservice principles.",
      longDescription: "Plutopal combines traditional e-commerce with modern livestreaming capabilities. I implemented the real-time chat and notification system using GetStream.io and integrated AWS S3 for high-performance media delivery. The backend was architected using microservices to ensure independent scalability of the streaming and commerce modules.",
      githubUrl: ""
    },
    {
      title: "Astra",
      subtitle: "Image Management & Editing Platform",
      tech: ["React.js", "Node.js", "Konva.JS", "PostgreSQL", "AWS S3"],
      description: "Designed and developed a city-wise image management system and built a browser-based image editor allowing users to apply filters, resize, and layer visual elements.",
      longDescription: "Astra is a powerful web-based image editing suite. I utilized Konva.js to build a performant canvas-based editor that supports non-destructive editing, layers, and complex filters. The system manages millions of assets with a highly optimized PostgreSQL schema and serves them globally via AWS S3 and CloudFront.",
    }
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Next.js", icon: "nextdotjs" },
        { name: "React.js", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "Sass", icon: "sass" },
        { name: "Redux", icon: "redux" },
        { name: "WordPress", icon: "wordpress" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Golang", icon: "golang" },
        { name: "NestJS", icon: "nestjs" },
        { name: "GraphQL", icon: "graphql" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Python", icon: "python" },
        { name: "Django", icon: "django" },
        { name: "Express.js", icon: "express" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Firebase", icon: "firebase" },
        { name: "Prisma", icon: "prisma" }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: "amazonaws" },
        { name: "Firebase", icon: "firebase" },
        { name: "Docker", icon: "docker" },
        { name: "CI/CD", icon: "githubactions" },
        { name: "Vercel", icon: "vercel" },
        { name: "Linux", icon: "linux" }
      ]
    },
    {
      category: "Other",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Postman", icon: "postman" },
        { name: "REST APIs", icon: "insomnia" }
      ]
    }
  ],

  education: {
    school: "Ganpat University, Gujarat",
    degree: "BTech in Computer Science Spec. in Big Data Analytics",
    period: "Oct 2020 – June 2024",
    stats: "CGPA: 8.01"
  },

  certifications: [
    {
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      issuer: "Amazon Web Services Training and Certification",
      date: "29/03/2021",
      description: "Completed comprehensive training on cloud computing fundamentals, AWS services, and cloud-based solutions.",
      url: "https://www.credly.com/badges/60538272-9e5a-4eac-8e96-8c3cf5f660b4?source=linked_in_profile"
    },
    {
      title: "AWS Academy Graduate - Machine Learning Foundations - Training Badge",
      issuer: "Amazon Web Services Training and Certification",
      date: "21/10/2023",
      description: "Completed comprehensive coursework covering Machine Learning Foundations on AWS.",
      url: "https://www.credly.com/badges/b986677d-f2c6-41e9-9386-8f05cb31f9ce/linked_in_profile"
    },
    {
      title: "NoSQL Concepts",
      issuer: "Datacamp",
      date: "09/02/2023",
      description: "Completed coursework on non-relational database architectures, covering key-value, document, column-family, and graph databases.",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/771336245e648790ad7c587e57e8357255c72130"
    },
  ]
};

import resumePdf from './Rajesh_Resume_1.pdf';

export const portfolioData = {
  personalInfo: {
    name: "Rajesh Koneru",
    headline: "Backend Developer | Full-Stack Developer",
    subHeadline: "B.Tech ECE Student (Graduating 2027)",
    location: "Hyderabad, Telangana, India",
    email: "rajeshkoneru29@gmail.com",
    phone: "+91 9390193971",
    linkedin: "https://linkedin.com/in/rajesh-koneru", // placeholder
    github: "https://github.com/rajesh-koneru", // placeholder
    resumeUrl: resumePdf,
    summary: "I am a B.Tech Electronics & Communication Engineering student graduating in 2027 with hands-on experience in backend and full-stack development. I specialize in building robust, scalable backend systems, secure RESTful APIs, and database-driven applications using Python, Java, SQL, React, Flask, Django, and Spring Boot. I have a strong foundation in software engineering, object-oriented programming, and algorithmic problem-solving. My goal is to apply my engineering mindset to develop high-performance applications that solve real-world problems."
  },
  roles: [
    "Backend Developer",
    "Full-Stack Developer",
    "Spring Boot & Java Enthusiast",
    "Python & Django/Flask Developer",
    "B.Tech ECE Student"
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Spring Boot", level: 85 },
        { name: "Flask", level: 90 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 80 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Postman", level: 90 },
        { name: "AWS Basics", level: 70 }
      ]
    },
    {
      category: "Core Concepts",
      items: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "OOP (Object-Oriented Programming)", level: 85 },
        { name: "DBMS", level: 85 },
        { name: "Authentication (JWT, OAuth)", level: 75 },
        { name: "CRUD Operations", level: 90 },
        { name: "API Development & Security", level: 85 },
        { name: "Backend Architecture", level: 80 }
      ]
    }
  ],
  experience: [
    {
      role: "Backend Developer Intern",
      company: "JALA Academy",
      location: "Hyderabad, Telangana, India",
      duration: "Jun 2025 - Apr 2026",
      highlights: [
        "Developed and maintained RESTful APIs using Flask and Node.js for complex backend workflows.",
        "Assisted in designing scalable backend modules and API integrations for full-stack applications.",
        "Mentored junior students and peers in React.js, backend development, and REST API integration concepts.",
        "Performed intensive API testing, debugging, and schema validation using Postman.",
        "Collaborated within cross-functional teams using Git workflows and participated in active code reviews."
      ]
    }
  ],
  projects: [
    {
      id: "moviemasti",
      title: "MovieMasti - Movie Ticket Booking System",
      techStack: ["Spring Boot", "React.js", "MySQL", "Docker"],
      date: "Apr 2026",
      description: "A comprehensive full-stack movie ticket booking application providing secure scheduling, seat selection, and user booking workflows.",
      highlights: [
        "Developed a robust backend using Spring Boot and high-performance React.js frontend interface.",
        "Designed and implemented secure RESTful APIs for movie management, show scheduling, live seat booking, and user accounts.",
        "Integrated MySQL database for storing relational user transaction, booking, and movie schedules with optimized query execution.",
        "Containerized the entire multi-service application stack using Docker to guarantee clean environments and streamlined local setups."
      ],
      githubUrl: "https://github.com/rajesh-koneru/MovieMasti",
      liveUrl: "#" // placeholder
    },
    {
      id: "auditavenger",
      title: "AuditAvenger - Financial Audit Management System",
      techStack: ["Flask", "MongoDB", "Docker"],
      date: "Nov 2024 - Feb 2025",
      description: "A secure, role-based audit trail and record management system designed for financial compliance tracking.",
      highlights: [
        "Developed lightweight, high-speed backend services and REST APIs using Flask.",
        "Implemented strict role-based authentication (RBAC) and secure access token management for compliance officers and auditors.",
        "Designed highly flexible MongoDB schemas optimized for storing unstructured, detailed audit logs and financial transactional records.",
        "Dockerized the system environment to enable quick deployment and simplified local orchestration of Flask and MongoDB."
      ],
      githubUrl: "https://github.com/rajesh-koneru/AuditAvenger",
      liveUrl: "#" // placeholder
    },
    {
      id: "customerloan",
      title: "Customer Loan Management System",
      techStack: ["Django", "SQL", "Git"],
      date: "Aug 2025 - Dec 2025",
      description: "A database-driven banking utility for handling loan applications, user profile histories, and repayment status monitoring.",
      highlights: [
        "Built a robust Django backend architecture integrating built-in ORM and database layers.",
        "Designed relational database schemas with complex SQL queries optimized for processing loan metrics and customer logs.",
        "Implemented secure, multi-tier workflows for customer tracking, credit history checks, and loan repayment data analysis.",
        "Maintained codebase and feature releases with version control utilizing advanced Git branching and merging techniques."
      ],
      githubUrl: "https://github.com/rajesh-koneru/CustomerLoan",
      liveUrl: "#" // placeholder
    }
  ],
  education: {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    institute: "Siddhartha Institute of Engineering & Technology (SIET)",
    duration: "2023 - 2027",
    cgpa: "8.3/10.0"
  },
  certifications: [
    {
      title: "Full Stack Developer",
      issuer: "Cognify",
      date: "2025"
    },
    {
      title: "Software Development Certification",
      issuer: "Zidio Development",
      date: "2025"
    },
    {
      title: "Full Stack Development Training",
      issuer: "JALA Academy",
      date: "2026"
    }
  ],
  achievements: [
    {
      title: "Mentored 20+ Students",
      description: "Guided junior developers in backend architecture, database designs, and API integration concepts.",
      metric: "20+"
    },
    {
      title: "Built Scalable Applications",
      description: "Created several database-driven web apps using Java (Spring Boot), Python (Flask/Django), and relational databases.",
      metric: "5+ Apps"
    },
    {
      title: "Solved 80+ LeetCode Problems",
      description: "Demonstrated strong understanding of data structures, algorithms, and algorithmic complexity analysis.",
      metric: "80+"
    }
  ]
};

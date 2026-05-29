import type { PortfolioData } from "../types";

export const portfolio: PortfolioData = {
  person: {
    name: "Ilkin Ismayilov",
    location: "Baku, Azerbaijan",
    headline: "Computer Engineering student focused on secure Java backend systems.",
    intro:
      "I build backend services with attention to access control, reliable behavior, documentation, and team execution. My work combines Spring-based engineering, mentoring, and an operations-minded view of how software performs in real environments.",
    email: "ilkinismayilov.dev@gmail.com",
    linkedin: "https://linkedin.com/in/ilkin-ismayilov2",
  },
  highlights: [
    "Java Backend Team Lead at VersePay",
    "Mentor to 6 junior backend developers",
    "UNEC Computer Engineering student with GPA 94/100",
    "Full scholarship recipient at Ironhack IT SkillSprint",
  ],
  projects: [
    {
      title: "VersePay Backend Services",
      role: "Java Backend Team Lead",
      context:
        "FinTech backend work requiring secure service behavior, protected APIs, and dependable payment workflow implementation.",
      contribution: [
        "Worked on Spring Boot and Spring Security services with focus on access control and API protection.",
        "Contributed to testing, deployment, server configuration, and payment workflow implementation.",
        "Collaborated in a structured team environment where reliability and disciplined execution mattered.",
      ],
      technologies: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Testing", "Deployment"],
      outcome:
        "Practical experience in secure backend delivery, production-minded engineering, and coordinated team execution.",
    },
    {
      title: "CodersAzerbaijan Backend Mentorship",
      role: "Java Backend Mentor",
      context:
        "Mentorship program supporting junior developers as they learn backend architecture, deployment, and engineering discipline.",
      contribution: [
        "Mentor 6 junior developers in REST API design and secure development practices.",
        "Guide Dockerized deployments, documentation quality, and logical problem solving.",
        "Provide structured code review feedback to improve technical clarity and consistency.",
      ],
      technologies: ["Java", "REST APIs", "Docker", "Code Review", "Documentation"],
      outcome:
        "Evidence of communication, technical leadership, and the ability to raise engineering standards in a team.",
    },
    {
      title: "Renter.az",
      role: "Co-Founder",
      context:
        "Early-stage product initiative requiring product direction, backend planning, and execution across uncertain priorities.",
      contribution: [
        "Contributed to product direction and backend planning.",
        "Supported early-stage execution and technical decision-making.",
      ],
      technologies: ["Backend Planning", "Product Direction", "Team Execution"],
      outcome:
        "Hands-on startup experience with product ownership, planning, and initiative beyond coursework.",
    },
  ],
  experience: [
    {
      title: "Java Backend Team Lead",
      organization: "VersePay (FinTech)",
      period: "Dec 2025 - Present",
      bullets: [
        "Worked on secure backend services using Spring Boot and Spring Security, with focus on access control, API protection, and reliable system behavior.",
        "Contributed to testing, deployment, server configuration, and payment workflow implementation in a structured team environment.",
      ],
    },
    {
      title: "Java Backend Mentor",
      organization: "CodersAzerbaijan",
      period: "Sep 2025 - Present",
      bullets: [
        "Mentor 6 junior developers in REST API design, secure development practices, Dockerized deployments, and engineering discipline.",
        "Provide structured code review feedback and technical guidance to improve documentation quality and logical problem solving.",
      ],
    },
  ],
  education: [
    {
      title: "B.Sc. in Computer Engineering",
      organization: "Azerbaijan State University of Economics (UNEC)",
      period: "Sep 2023 - Jun 2027",
      bullets: ["Current GPA: 94/100."],
    },
    {
      title: "Web Development and AI",
      organization: "Ironhack - IT SkillSprint Bootcamp",
      period: "Jan 2026 - Jul 2026",
      bullets: ["Full scholarship recipient; selected in the top 2.5% of 1,000+ applicants."],
    },
  ],
  activities: [
    {
      title: "Hackathon Finalist",
      organization: "PashaHackathon 5.0, Holberton School Azerbaijan Micro SaaS Hackathon, PashaHackathon 6.0",
      period: "Finalist",
      bullets: ["Reached finalist standing across multiple product and software-building events."],
    },
    {
      title: "Volunteer",
      organization: "Baku City Circuit",
      period: "Formula 1 Grand Prix and international events",
      bullets: ["Supported high-pressure event operations in an international environment."],
    },
    {
      title: "Volunteer, Transport Department",
      organization: "World Urban Forum 13 (WUF13)",
      period: "International event operations",
      bullets: ["Supported transport coordination and operational activities during a major international event."],
    },
  ],
  skills: {
    technical: [
      "Java Core",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "PostgreSQL",
      "MySQL",
      "JPA/Hibernate",
      "Docker",
      "Linux",
      "JUnit",
      "Mockito",
      "Git",
      "Maven",
      "REST APIs",
      "Postman",
      "Swagger",
      "Redis",
      "Microservices basics",
      "RabbitMQ",
    ],
    professional: ["Analytical thinking", "Written communication", "Teamwork", "Process discipline", "Fast learning"],
    languages: ["Azerbaijani native", "Turkish advanced", "English upper-intermediate"],
  },
};

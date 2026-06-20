import portfolioPreview from "../assets/portfolio-preview.png";
import mongodbContactPreview from "../assets/mongodb-contact-preview.png";
// import aiLeadWorkflowPreview from "../assets/ai-lead-workflow-preview.png"; // keep for future automation comeback

export const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive modern user interfaces using React.js, Tailwind CSS, reusable components, routing, and clean frontend engineering practices.",
    tools: "React · Tailwind · JavaScript",
  },
  {
    title: "Backend Development",
    description:
      "Building scalable backend APIs, server-side logic, request handling, validation, and application architecture using Node.js and Express.js.",
    tools: "Node.js · Express.js · REST APIs",
  },
  {
    title: "Database Integration",
    description:
      "Designing database-driven applications using MongoDB, Mongoose models, CRUD operations, schema design, and persistent data management.",
    tools: "MongoDB · Mongoose · CRUD",
  },
];

export const projects = [
  {
    slug: "full-stack-portfolio-website",
    title: "Full-Stack Portfolio Website",
    category: "MERN Stack",
    label: "MERN Project",
    image: "Portfolio Website Preview",
    imageSrc: portfolioPreview,
    databaseImageSrc: mongodbContactPreview,
    status: "Live / Completed",
    techStack: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Vercel API",
      "MongoDB Atlas",
      "Mongoose",
      "GitHub",
      "Vercel",
    ],
    description:
      "A full-stack portfolio website built using React, Tailwind CSS, React Router, backend API routes, and MongoDB Atlas. It demonstrates frontend architecture, backend integration, database storage, and deployment workflow.",
    problem:
      "A basic portfolio website often shows frontend skills only. I wanted to build a portfolio that proves real full-stack development ability by integrating frontend, backend, database, deployment, and production-ready architecture.",
    solution:
      "I built a responsive React portfolio with reusable components, dynamic project pages using React Router, a contact form connected to backend API routes, and MongoDB Atlas integration for persistent message storage.",
    learned:
      "I learned React component architecture, reusable UI design, routing with React Router, API integration, backend request handling, MongoDB data storage, environment variables management, deployment, and production debugging.",
    demoLink: "https://flowstack-portfolio.vercel.app",
    githubLink: "https://github.com/Abdullahamir8/flowstack-portfolio",
  },

  // KEEP THIS FOR FUTURE AUTOMATION PHASE
  /*
  {
    slug: "ai-lead-qualification-crm-automation",
    title: "AI Lead Qualification & CRM Automation",
    ...
  },
  */

  {
    slug: "business-landing-page",
    title: "Business Landing Page",
    category: "Frontend Development",
    label: "React Project",
    image: "Landing Page Preview",
    status: "Planned",
    techStack: ["React", "Tailwind CSS", "Responsive Design"],
    description:
      "A modern responsive landing page focused on business presentation, clean UI design, responsive layouts, and conversion-focused frontend development.",
    problem:
      "Many small businesses need a strong online presence but often lack professional landing pages that clearly communicate services and guide users toward taking action.",
    solution:
      "This project focuses on building a modern responsive landing page with clear content structure, strong call-to-actions, service sections, testimonials, and conversion-oriented user experience.",
    learned:
      "This project will strengthen my frontend engineering skills, responsive design principles, component structuring, layout planning, and UI design focused on user conversion.",
    demoLink: "#",
    githubLink: "#",
  },
];
import portfolioPreview from "../assets/portfolio-preview.png";
import mongodbContactPreview from "../assets/mongodb-contact-preview.png";
export const services = [
  {
    title: "n8n Automation",
    description:
      "Custom n8n workflows for lead capture, email automation, CRM updates, Google Sheets, webhooks, and API integrations.",
    tools: "n8n · Webhooks · APIs",
  },
  {
    title: "AI Automation",
    description:
      "AI-powered workflows using ChatGPT/OpenAI for lead qualification, smart replies, summarization, and business process automation.",
    tools: "OpenAI · AI Agents · n8n",
  },
  {
    title: "MERN Web Development",
    description:
      "Modern websites and full-stack web apps using React, Node.js, Express, MongoDB, admin dashboards, and contact forms.",
    tools: "React · Node · MongoDB",
  },
];

export const projects = [
  {
    slug: "ai-lead-qualification-crm-automation",
    title: "AI Lead Qualification & CRM Automation",
    category: "n8n Automation",
    label: "Automation Project",
    image: "AI Workflow Preview",
    status: "In Progress",
    techStack: ["n8n", "OpenAI", "Google Sheets", "Gmail", "Webhook"],
    description:
      "An n8n workflow that captures leads, analyzes them with AI, stores them in a CRM sheet, and sends email notifications.",
    problem:
      "Many businesses receive leads from forms, social media, or ads, but they waste time manually checking which leads are serious and which ones are low quality.",
    solution:
      "This automation captures lead data through a webhook, uses AI to analyze the lead message, assigns a quality score, stores the lead in Google Sheets, and sends an email notification for follow-up.",
    learned:
      "This project helped me understand how n8n webhooks, AI models, Google Sheets, and Gmail can work together to create a practical business automation workflow.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    slug: "full-stack-portfolio-website",
    title: "Full-Stack Portfolio Website",
    category: "MERN Stack",
    label: "MERN Project",
    image: "Portfolio Website Preview",
    imageSrc: portfolioPreview,
    databaseImageSrc: mongodbContactPreview,
    status: "In Progress",
    techStack: ["React", "Tailwind CSS", "React Router", "GitHub", "Vercel"],
    description:
      "A full-stack portfolio website built with React, Tailwind CSS, React Router, Vercel serverless API routes, and MongoDB Atlas. It showcases services, projects, project detail pages, real screenshots, and a working contact form that stores client messages in a database.",

    problem:
      "A simple portfolio website can show skills, but it often does not prove real full-stack ability. I needed a professional portfolio that could present projects clearly, collect client inquiries, and demonstrate that frontend, backend, database, deployment, and GitHub workflow are all working together.",

    solution:
      "I built a responsive React and Tailwind CSS portfolio with reusable components, project detail pages using React Router, and a live contact form connected to a Vercel serverless API route. The API validates submissions and stores contact messages in MongoDB Atlas, proving that the project has real backend and database functionality.",

    learned:
      "I learned how to structure a React portfolio project, use reusable data-driven components, create dynamic project pages with React Router, connect a frontend form to an API, store submissions in MongoDB Atlas, manage environment variables, deploy on Vercel, and troubleshoot production issues such as database network access.",
    demoLink: "https://flowstack-portfolio.vercel.app",
    githubLink: "https://github.com/Abdullahamir8/flowstack-portfolio",
  },
  {
    slug: "business-landing-page",
    title: "Business Landing Page",
    category: "React Website",
    label: "Web Project",
    image: "Landing Page Preview",
    status: "Planned",
    techStack: ["React", "Tailwind CSS", "Responsive Design"],
    description:
      "A clean and responsive landing page for a business service with call-to-action sections and contact form design.",
    problem:
      "Many small businesses need a simple online presence, but they often do not have a clean landing page that clearly explains their service and guides visitors to take action.",
    solution:
      "This planned landing page will include a clear hero section, service highlights, benefits, testimonials, call-to-action buttons, and a contact section using a responsive React and Tailwind CSS layout.",
    learned:
      "This project will help improve my frontend design skills, responsive layout planning, landing page structure, and conversion-focused UI design.",
    demoLink: "#",
    githubLink: "#",
  },
];

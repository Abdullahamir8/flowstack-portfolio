# FlowStack Portfolio

A modern portfolio website built to showcase n8n automation, AI workflow automation, and MERN stack web development projects.

## Live Website

https://flowstack-portfolio.vercel.app

## Overview

FlowStack Portfolio is a personal portfolio website designed to present automation and web development skills in a professional way. It includes services, featured projects, project detail pages, case study content, contact information, and a working contact form.

This project is also part of my learning journey for understanding how modern web apps are built locally, pushed to GitHub, connected to a database, and deployed online using Vercel.

## Features

* Modern dark UI
* Responsive layout
* Mobile navigation menu
* Services section
* Featured projects section
* Project detail pages
* Case study content for each project
* Contact section
* Contact form validation
* Contact form submissions saved to MongoDB Atlas
* Reusable React components
* Data-driven project cards
* Vercel serverless API route
* Hosted on Vercel

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router

### Backend / API

* Vercel Serverless Functions
* Node.js
* Express.js for local backend learning
* Mongoose

### Database

* MongoDB Atlas

### Tools & Deployment

* Git
* GitHub
* Vercel

## Project Categories

* n8n Automation
* AI Automation
* MERN Stack Development
* React Websites
* Business Landing Pages

## Contact Form Workflow

The contact form is connected to a backend API route and stores form submissions in MongoDB Atlas.

Current production flow:

```text
Vercel React Frontend
→ /api/contact serverless API route
→ MongoDB Atlas
→ contactmessages collection
```

The project also includes a local Express backend inside the `server` folder for learning and development purposes.

## Current Status

The frontend MVP is completed and deployed.

Completed features include:

* Portfolio homepage
* Project cards
* Project detail pages
* Unique case study content
* Mobile responsive navbar
* Contact form validation
* Live contact form connected to MongoDB Atlas
* GitHub repository setup
* Vercel deployment

## Future Improvements

* Admin dashboard
* Project CRUD functionality
* Authentication for admin access
* Better contact form email notifications
* n8n webhook integration
* AI lead qualification workflow
* More real automation case studies
* Improved project screenshots and demo videos

## Author

Built by Abdullah Amir.

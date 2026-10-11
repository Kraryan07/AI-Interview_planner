# Interview AI

A full-stack AI-powered interview preparation app that helps users generate personalized interview strategies based on a target job description, resume, and self-description.

The project is split into two main parts:

- Backend: Express.js API with MongoDB, authentication, interview report generation, and resume PDF workflows
- Frontend: React + Vite app for login, registration, and interview planning

## Features

- User authentication with registration, login, logout, and session retrieval
- AI-generated interview strategy based on:
  - job description
  - resume upload or self-description
  - candidate profile
- Interview report retrieval by ID
- Recent interview reports for logged-in users
- Resume PDF generation workflow
- Protected routes on the frontend
- Responsive UI for interview planning

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- SCSS

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- Cookie-based session handling
- Multer for file upload
- Google GenAI SDK
- Puppeteer
- PDF parsing utilities

## Repository Structure

```text
interview-ai-yt/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── .gitignore
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── index.html
│   ├── eslint.config.js
│   └── .gitignore
├── README.md
└── .gitignore

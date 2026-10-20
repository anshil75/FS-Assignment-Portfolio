## Portfolio Website

A full-stack personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌐 Live Demo

- **Frontend (Vercel):** https://fs-assignment-portfolio.vercel.app/
- **Backend (Render):** https://portfolio-backend-blg9.onrender.com

---

## 🛠️ Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React.js, React Router, Framer Motion, CSS |
| Backend  | Node.js, Express.js                 |
| Database | MongoDB, Mongoose                   |
| Deploy   | Vercel (frontend), Render (backend) |

---

## ✨ Features

- Animated Hero section with typewriter effect
- About Me with scroll-triggered animations
- Grouped animated skill bars with tooltips
- Project showcase cards with tech badges
- Vertical animated Education & Experience Timeline
- Certifications & Achievements section
- Contact form connected to Express backend → saved in MongoDB
- PDF and DOCX CV download via Express routes
- Dark / Light mode toggle (persisted in localStorage)
- Fully responsive (mobile, tablet, desktop)

---

## 📁 Project Structure

```
mern-portfolio/
├── client/                 
│   ├── public/
│   ├── src/
│   │   ├── components/     
│   │   ├── pages/          
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
│
├── server/               
│   ├── models/
│   │   └── Contact.js       
│   ├── routes/
│   │   ├── contact.js      
│   │   └── download.js      
│   ├── files/              
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md

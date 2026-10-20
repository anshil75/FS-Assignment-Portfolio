## Portfolio Website

A full-stack personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌐 Live Demo

- **Frontend (Vercel):** [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app) ← Replace after deployment
- **Backend (Render):** [https://your-api.onrender.com](https://your-api.onrender.com) ← Replace after deployment

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
├── client/                  # React.js frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/      # Navbar, Hero, About, Skills, Projects, Timeline, Certifications, Contact, Footer
│   │   ├── pages/           # Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
│
├── server/                  # Node.js + Express backend
│   ├── models/
│   │   └── Contact.js       # Mongoose schema
│   ├── routes/
│   │   ├── contact.js       # POST /api/contact
│   │   └── download.js      # GET /api/download/pdf & /docx
│   ├── files/               # Place your resume.pdf and resume.docx here
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js v18+ installed
- MongoDB Atlas account (free)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mern-portfolio.git
cd mern-portfolio
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `/server` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_ORIGIN=http://localhost:5173
```

Add your `resume.pdf` and `resume.docx` files to `server/files/`.

Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌍 Deployment

### Backend on Render
1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo, select the `/server` folder as root
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add Environment Variables: `MONGO_URI`, `PORT`, `CLIENT_ORIGIN`

### Frontend on Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Connect your GitHub repo, set root directory to `/client`
3. Framework: Vite
4. Add Environment Variable: `VITE_API_URL=https://your-api.onrender.com`
5. Deploy

Update `axios` base URL in frontend to use `VITE_API_URL` for production.

---

## ⚙️ Environment Variables

**Server `.env`** (never commit this file):
```
PORT=5000
MONGO_URI=mongodb+srv://...
CLIENT_ORIGIN=https://your-portfolio.vercel.app
```

---

## 📜 License

MIT

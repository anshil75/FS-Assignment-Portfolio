## Portfolio Website

A full-stack personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌐 Live Demo

- **Frontend Deployment (Vercel):** https://fs-assignment-portfolio.vercel.app/

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
```

---

## 🚀 Local Setup

Follow these steps to run the project on your local machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- [Git](https://git-scm.com/)
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

---

### 1. Clone the Repository

```bash
git clone https://github.com/anshil75/FS-Assignment-Portfolio.git
cd FS-Assignment-Portfolio
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_ORIGIN=http://localhost:5173
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> **Note:** `EMAIL_USER` and `EMAIL_PASS` are optional. If skipped, contact form messages will still be saved to MongoDB — email notifications just won't be sent.

Make sure your resume files are placed in `server/files/`:
```
server/files/resume.pdf
server/files/resume.docx
```

Start the backend development server:

```bash
npm run dev
```

Backend will run at: `http://localhost:5000`

You can verify it is running by opening: `http://localhost:5000/api/health`
It should respond with: `{"status":"ok"}`

---

### 3. Frontend Setup

Open a **new terminal** in the project root:

```bash
cd client
npm install
```

Create a `.env` file inside the `client/` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

### 4. Open in Browser

Open [http://localhost:5173](http://localhost:5173) in your browser.

Both the frontend and backend must be running simultaneously for all features (contact form, resume download) to work correctly.

---

## ⚙️ Environment Variables

### Server (`server/.env`)

| Variable | Description | Required |
|:---|:---|:---|
| `PORT` | Port number for the Express server | No (defaults to 5000) |
| `MONGO_URI` | MongoDB Atlas connection string | ✅ Yes |
| `CLIENT_ORIGIN` | Frontend URL for CORS (use `http://localhost:5173` locally) | ✅ Yes |
| `EMAIL_USER` | Gmail address used for sending email notifications | No |
| `EMAIL_PASS` | Gmail App Password (not your regular password) | No |

### Client (`client/.env`)

| Variable | Description | Required |
|:---|:---|:---|
| `VITE_API_URL` | Backend API base URL (use `http://localhost:5000` locally) | ✅ Yes |

> **Security:** Never commit your `.env` files. They are already listed in `.gitignore`.

---

## 📜 License

MIT

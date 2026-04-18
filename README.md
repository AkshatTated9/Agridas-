# 🌾 AgriDas

## Overview

AgriDas is a full-stack web platform built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** that connects farmers with nearby machinery providers and laborers.

The platform solves the lack of visibility in the agricultural service ecosystem by enabling farmers to easily find and hire required machinery and labor at competitive prices.

By improving accessibility and efficiency, AgriDas helps reduce farming costs, save time, and increase overall productivity and profitability in agriculture.

---

## 🚀 Getting Started

### 1. Install Dependencies

#### Frontend
Navigate to the `client` directory:
npm install
# or
yarn install

#### Backend
Navigate to the `api` directory:
npm install
# or
yarn install

---

### 2. Environment Variables

#### 📌 Client (.env)
Create a `.env` file inside the `client` folder:

VITE_BASE_URL=http://localhost:4000
VITE_GOOGLE_CLIENT_ID=your_google_client_id

#### 📌 Server (.env)
Create a `.env` file inside the `api` folder:

PORT=4000
DB_URL=your_database_url
JWT_SECRET=your_secret_key
JWT_EXPIRY=20d
COOKIE_TIME=7
SESSION_SECRET=your_session_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CLIENT_URL=http://localhost:5173

---

### 3. Run the Project

#### Frontend
npm run dev
# or
yarn dev

#### Backend
npm start
# or
yarn start

---

### 4. 🐳 Docker Setup (Optional)

docker-compose up --build

---

## 🛠️ Tech Stack

- MongoDB – Database  
- Express.js – Backend framework  
- React.js – Frontend library  
- Node.js – Runtime environment  
- Tailwind CSS – Styling  
- Shadcn UI – UI components  
- JWT – Authentication  
- Cloudinary – Image storage  
- Google OAuth – Login system  
- Docker – Containerization  

---

## 🌱 Impact

AgriDas bridges the gap between farmers, machinery providers, and laborers, making agricultural services more accessible, efficient, and affordable.

---

## 📌 Features

- Farmer ↔ Machinery Provider connection  
- Farmer ↔ Labour hiring system  
- Location-based service discovery  
- Secure authentication (JWT + Google OAuth)  
- Image upload with Cloudinary  
- Responsive UI  
- Docker support  

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss.

---

## 📜 License

MIT License

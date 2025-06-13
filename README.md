# This is a full-stack MERN (MongoDB, Express, React, Node.js) application that displays:

- 🌍 Most Popular Destinations
- 🧳 Top Selling Tour Packages

All data is dynamically fetched from a backend using React Query and displayed using MUI components.

## 📁 Project Structure
/project-root

├── /backend # Express + MongoDB

├── /frontend # React + MUI + React Query

## 🛠️ Prerequisites

- Node.js installed
- MongoDB installed and running locally on `mongodb://127.0.0.1:27017`

## 🚀 How to Run

### 📦 Backend

```bash
cd backend
npm install          # install packages
node seed.js         # insert mock data
node server.js       # start the Express server
```

Server runs at: http://localhost:5000

Available APIs:
GET /api/destinations
GET /api/packages/top-selling

### 🌐 Frontend
In another terminal:

```bash
cd frontend
npm install          # install packages
npm start            # run the React app
```
Frontend runs at: http://localhost:3000

## 🖼️Screenshot 
![image](https://github.com/user-attachments/assets/5bca8136-77ea-477f-be1d-a493aa36492b)


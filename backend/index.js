// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware


// Routes
const userRoutes = require('./src/users/user.route');
const carRoutes = require('./src/cars/car.route');
const AdminRoutes = require("./src/stats/admin.stats");
const newsRoutes = require("./src/news/news.route");

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use('/api/cars', carRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/admin', AdminRoutes);
app.use('/api/news', newsRoutes);
// Rute default untuk root
app.get("/", (req, res) => {
  res.send("Server Dealer Berjalan");
});

// Koneksi ke database dan server start
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected Successfully");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

main();

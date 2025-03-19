// index.js (Backend API World University Database)

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Setup
const db = new sqlite3.Database("./movies.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database.");
    }
  });

// Context dan Model Universitas
const universitySchema = new mongoose.Schema({
    name: String,
    country: String,
    city: String,
    ranking: Number,
    website: String,
});

const University = mongoose.model("University", universitySchema);

// API Endpoints
app.get("/universities", async (req, res) => {
    try {
        const universities = await University.find();
        res.json(universities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/universities", async (req, res) => {
    const { name, country, city, ranking, website } = req.body;
    const newUniversity = new University({ name, country, city, ranking, website });
    
    try {
        await newUniversity.save();
        res.status(201).json(newUniversity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

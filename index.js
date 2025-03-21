const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const app = express();
const apiKey = process.env.MONGODB_URI; // Access environment variable correctly

const port = process.env.PORT || 8080; // Use environment variable or default port

app.listen(port, async (request, response) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error); // Use console.error for errors
  }
});

app.get("/sulli", (request, response) => {
  response.status(200).send({ msg: "Pora sulliuga" });
  console.log("API Key:", apiKey);
});

// Add this to handle unhandled rejections:
process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for frontend access
app.use(cors());

// Default root route (fixes "Cannot GET /" issue)
app.get("/", (req, res) => {
  res.send("Welcome to the CI/CD Pipeline Backend!");
});

// API route for frontend to fetch message
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


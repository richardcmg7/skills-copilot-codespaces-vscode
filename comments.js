// Create web server
const express = require("express");
const app = express();

// Import the router
const router = require("./routes/comments");

// Parse JSON
app.use(express.json());

// Use the router
app.use("/", router);

// Port
const port = 3000;

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


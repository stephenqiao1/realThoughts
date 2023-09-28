require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./src/routes/userRoutes");
const thoughtRoutes = require("./src/routes/thoughtRoutes");
const reactionRoutes = require("./src/routes/reactionRoutes");
const followRoutes = require("./src/routes/followRoutes");
const moodRoutes = require("./src/routes/moodRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);
app.use("/api/reactions", reactionRoutes);
app.use("/api/follows", followRoutes);
app.use("/api/moods", moodRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

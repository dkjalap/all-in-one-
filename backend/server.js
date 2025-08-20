const express = require("express");
const connectDB = require("./dbconection");
const User = require("./dbschema");

const app = express();

// Middleware
app.use(express.json());

// DB connect
connectDB();

// Example route
app.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => console.log("Server running on port 5000"));

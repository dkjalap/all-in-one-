const express = require("express");
const cors = require("cors");
const connectDB = require("./dbconection");
const User = require("./model/user");
const userRoute = require("./routes/user")

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// DB connect
connectDB();

// Example route
app.use("/user", userRoute);


app.listen(5000, () => console.log("Server running on port 5000"));

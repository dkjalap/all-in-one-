const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const connectDB = require("./dbconection");
const User = require("./model/user");
const userRoute = require("./routes/user")
const  anyRoute = require("./routes/any")

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// DB connect
connectDB();

// Example route
app.use("/user", userRoute);
app.use("/any",anyRoute)

app.listen(5000, () => console.log("Server running on port 5000"));

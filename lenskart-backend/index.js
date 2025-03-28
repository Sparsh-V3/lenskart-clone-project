const express = require("express");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = Number(process.env.PORT_NUMBER) || 8080;

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Testing backend....");
});

app.listen(port, async () => {
  try {
    await dbConnect();
    console.log(`The server is running at http://localhost:${port}`);
  } catch (error) {
    console.error(
      "Error encountered while running the server : ",
      error.message
    );
  }
});

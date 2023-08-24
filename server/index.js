const express = require('express')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require("cors")
const errorHandler = require("./middlewares/error")
const userRoutes = require("./routes/users")

// Connect to DB
connectDB();
// Express App
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);



app.use("/", (req, res) => {
    return res.json({
        message: "Welcome to the Node.js REST API using ExpressJS and MongoDB"
    });
});

app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
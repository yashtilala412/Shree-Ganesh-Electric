const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Enable CORS for requests from http://localhost:5173
// app.use(cors({
//   origin: "http://localhost:5173",
// }));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const dbConfig = require("./config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with the database");
  })
  .catch((err) => {
    console.error("Error in database connection: ", err);
    process.exit();
  });

// Routes
const routes = require("./routes");
// Enable CORS for requests from http://localhost:3030
app.use("/api", cors({
  origin: ["http://localhost:3030", "http://localhost:5002"],
}), routes);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server is running on port ${port}`));

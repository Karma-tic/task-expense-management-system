const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const express = require("express");
const { connectDB } = require("./config/db");
const routes = require("./routes");

const app = express();
const PORT = Number(process.env.PORT || 3000);

// middleware
app.use(express.json());

// routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

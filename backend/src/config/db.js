const sql = require("mssql");

const requiredSettings = ["DB_SERVER", "DB_NAME"];
const missingSettings = requiredSettings.filter((name) => !process.env[name]);

if (missingSettings.length > 0) {
  throw new Error(`Missing required database settings: ${missingSettings.join(", ")}`);
}

const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER || undefined,
  password: process.env.DB_PASSWORD || undefined,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate:
      process.env.DB_TRUST_SERVER_CERTIFICATE !== "false"
  }
};

const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log("MS SQL Server connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};

module.exports = {
  sql,
  connectDB
};
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
  if (err) {
    console.error("Could not connect to the database", err);
    return;
  }
  console.log("DB connected successfully");
});

module.exports = pool;

const express = require("express");
const cors = require("cors");
const gameRoutes = require("./routes/game_routes");

require("dotenv").config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//API routes
app.use("/api", gameRoutes);

//start the server
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

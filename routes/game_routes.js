const express = require("express");
const { savegame, fetchallgames } = require("../controllers/game_controller");

const router = express.Router();

router.post("/games", savegame);
router.get("/games", fetchallgames);

module.exports = router;

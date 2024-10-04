const { insertgame, getallgames } = require("../models/game_model");

//saveing a game

const savegame = async (req, res) => {
  const { player1, player2, score, winner } = req.body;

  try {
    await insertgame(player1, player2, score, winner);
    res.status(201).json({ message: "Game saved succesfully" });
  } catch (error) {
    console.error("Error in saving game:", error);
    res.status(500).json({ message: "failed to save game" });
  }
};

//Fetch all games

const fetchallgames = async (req, res) => {
  try {
    const games = await getallgames();
    res.status(200).json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).json({ message: "failed to fetch games" });
  }
};

module.exports = { savegame, fetchallgames };

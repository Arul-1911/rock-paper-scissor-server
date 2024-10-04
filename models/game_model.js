const pool = require("../config/db");

//inserting a new game

const insertgame = async (player1, player2, score, winner) => {
  const query = `INSERT INTO games (player1,player2,score,winner) VALUES ($1,$2,$3,$4)`;

  await pool.query(query, [player1, player2, JSON.stringify(score), winner]);
};

//retiriveng all games from database

const getallgames = async () => {
  const result = await pool.query("SELECT * FROM games");
  return result.rows;
};

module.exports = { insertgame, getallgames };

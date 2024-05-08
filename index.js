const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "ds564",
  port: 7007,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h3>Seja bem-vindo à seleção de tributos!</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNb1_ISy7jZWT1btczvTSssWppojODpbkkFdMDfGl0A&s" alt="jogos vorazes" width="200" height="100">
    `);
});

app.post("/players", async (req, res) => {
    const { nome, distrito, arma, nivel, vida} = req.body;
    try {

      await pool.query(
        "INSERT INTO players (nome, distrito, arma, nivel, vida) VALUES ($1, $2, $3, $4, $5)",
        [nome, distrito, arma, nivel, vida]
      );
      res.json({
        status: "🎉",
        message: "tributo criado com sucesso",
      });
    } catch (error) {
      console.error("Erro ao criar tributo", error);
      res.status(500).send({
        status: "error",
        message: "Erro ao criar tributo",
      });
    }
  });

app.get("/players", async (req, res) => {
  try {
    const result = await pool.query(`
        SELECT * FROM players;
      `);
    res.json({
      status: "🎉",
      message: "Lista de tributos",
      quantity: result.rowCount,
      players: result.rows,
    });
  } catch (error) {
    console.error("Erro ao buscar tributos", error);
    res.status(500).send({
      status: "error",
      message: "Erro ao buscar tributos",
    });
  }
});

app.get("/players/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query("SELECT * FROM players WHERE id = $1", [id]);
      if (result.rowCount === 0) {
        res.json({
          status: "error",
          message: `tributo com id ${id} não encontrado`,
        });
      }
      res.json({
        message: "tributo:",
        players: result.rows[0],
      });
    } catch (error) {
      console.error("Erro ao buscar players", error);
    }
  });

  app.put("/players/:id", async (req, res) => {
    try {
      const { nome, distrito, arma, nivel, vida } = req.body;
      const { id } = req.params;
      await pool.query(
        "UPDATE players SET nome = $1, distrito = $2, arma = $3, nivel = $4, vida = $5 WHERE id = $6",
        [nome, distrito, arma, nivel, vida, id]
      );
      res.json({
        status: "🎉",
        message: "tributo atualizado com sucesso",
      });
    } catch (error) {
      console.error("Erro ao atualizar tributo", error);
      res.status(500).send({
        status: "error",
        message: "Erro ao atualizar tributo",
      });
    }
  });

  
/*app.get("/players/nome/:nome", async (req, res) => {
    try {
      const { nome } = req.params;
      const result = await pool.query(
        "SELECT * FROM players WHERE LOWER(nome) $1",
        [`%${nome.toLowerCase()}%`]
      );
      if (result.rowCount === 0) {
        res.json({
          status: "error",
          message: `tributo com nome ${nome} não encontrado`,
        });
      }
      res.json({
        status: "🎉",
        message: "tributo encontrado",
        players: result.rows,
      });
    } catch (error) {
      console.error("Erro ao buscar tibuto", error);
      res.status(500).send({
        status: "error",
        message: "Erro ao buscar tributo",
      });
    }
  });
  */
  
  app.delete("/players/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM players WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      res.json({
        status: "error",
        message: `tributo com id ${id} não encontrado`,
      });
    }
    res.json({
      status: "success",
      message: "tributo deletado com sucesso",
    });
  } catch (error) {
    console.error("Erro ao deletar tributo", error);
    res.status(500).send({
      status: "error",
      message: "Erro ao deletar tributo",
    });
  }
});

app.post("/combat", async (req, res) => {
    const { player1, player2 } = req.body;
  
    try {
      const player1Data = await pool.query("SELECT * FROM players WHERE id = $1", [
        player1,
      ]);
      const player2Data = await pool.query("SELECT * FROM players WHERE id = $1", [
        player2,
      ]);
  
      const player1Stats = player1Data.rows[0];
      const player2Stats = player2Data.rows[0];
  
      // ver o valor dos niveis
      const nivel = (tributo1, tributo2) => {
        const vencedorNivel = Math.max(0, tributo1.nível - tributo2.nível);
        return vencedorNivel;
      };
  
      




































app.listen(PORT, () => {
    console.log(`Que os jogos comecem🏹: ${PORT}`);
  }).on('error', (error) => {
    console.error('Erro ao iniciar o servidor:', error.message);
  });


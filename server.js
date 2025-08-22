// server.js
import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
import path from "path";
import { fileURLToPath } from "url";

const { Pool } = pkg;

// ⚡ Connexion à PostgreSQL (avec ton URL Render)
const pool = new Pool({
  connectionString: "postgresql://sql_myvehicule_user:8VTeVVcF5DWEhmMDhK6cPS6FWBobA259@dpg-d2jn3nemcj7s7392mpe0-a/sql_myvehicule"
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// ⚡ Résoudre __dirname (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚡ Servir ton HTML (dans un dossier "views")
app.use(express.static(path.join(__dirname, "views")));

// Exemple : récupérer tous les utilisateurs
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

// Exemple : ajouter un utilisateur
app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

// ⚡ Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
});

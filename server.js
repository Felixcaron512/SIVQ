import express from "express";
import fs from "fs";
import { google } from "googleapis";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour lire JSON
app.use(express.json());

// Servir ton HTML sans "public/"
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(process.cwd() + "/style.css");
});

app.get("/script.js", (req, res) => {
  res.sendFile(process.cwd() + "/script.js");
});

// -------- Connexion Google Drive --------
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",  // Ton fichier d’API
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

// Lire un fichier JSON depuis Drive
app.get("/api/data", async (req, res) => {
  try {
    const fileId = "TON_ID_DE_FICHIER_JSON";
    const result = await drive.files.get(
      { fileId, alt: "media" },
      { responseType: "stream" }
    );

    let data = "";
    result.data.on("data", (chunk) => (data += chunk));
    result.data.on("end", () => {
      res.json(JSON.parse(data));
    });
  } catch (err) {
    res.status(500).send("Erreur Google Drive: " + err.message);
  }
});

// Écrire/mettre à jour un fichier JSON sur Drive
app.post("/api/data", async (req, res) => {
  try {
    const fileId = "TON_ID_DE_FICHIER_JSON";
    const media = {
      mimeType: "application/json",
      body: JSON.stringify(req.body),
    };

    await drive.files.update({
      fileId,
      media,
    });

    res.send("Fichier mis à jour !");
  } catch (err) {
    res.status(500).send("Erreur mise à jour: " + err.message);
  }
});

// -------- Démarrer serveur --------
app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});

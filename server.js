import express from "express";
import bodyParser from "body-parser";
import { google } from "googleapis";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// ======================
// GOOGLE DRIVE SETUP
// ======================
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",   // Ton fichier JSON téléchargé depuis Google Cloud
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

// L’ID du fichier JSON dans Google Drive (après upload manuel une première fois)
const FILE_ID = "TON_FILE_ID_ICI";

// ======================
// ROUTES
// ======================

// Lire la "base de données"
app.get("/api/data", async (req, res) => {
  try {
    const result = await drive.files.get(
      { fileId: FILE_ID, alt: "media" },
      { responseType: "stream" }
    );

    let data = "";
    result.data.on("data", chunk => (data += chunk));
    result.data.on("end", () => {
      res.json(JSON.parse(data));
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lecture Google Drive");
  }
});

// Écrire (mettre à jour) la "base de données"
app.post("/api/data", async (req, res) => {
  try {
    const newData = JSON.stringify(req.body, null, 2);

    const media = {
      mimeType: "application/json",
      body: Buffer.from(newData),
    };

    await drive.files.update({
      fileId: FILE_ID,
      media,
    });

    res.send("Données mises à jour avec succès !");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur écriture Google Drive");
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});

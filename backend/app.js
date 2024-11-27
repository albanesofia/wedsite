require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");

const app = express();
// utilise le port utilise par le process ou le port 3000
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: "http://127.0.0.1:5500" })); // autorise le frontend se trouvant au port 5500

// Middleware
app.use(bodyParser.json()); //bodyparser interprete les requete JSON
app.use(express.static("frontend")); // Sert les fichiers statiques (HTML, CSS, JS)

// Routes
app.use("/contact", contactRoutes); //Si une requête commence par /contact, utilise les routes définies dans la variable contactRoutes.

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

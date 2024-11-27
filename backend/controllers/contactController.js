console.log("Backend: contactController appelé !");
const fs = require("fs"); // Pour lire/écrire dans un fichier JSON
const path = require("path"); // Pour gérer les chemins de fichiers

// Chemin du fichier JSON où sont stockés les contacts
const contactDataPath = path.join(__dirname, "../contact-data.json");

// Fonction pour ajouter un contact
const addContact = (req, res) => {
  // Récupérer les données envoyées dans la requête
  const { name, email, phone, message } = req.body;

  // Vérifier que les champs obligatoires sont présents
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Les champs nom, email et message sont requis." });
  }

  // Lire les contacts existants depuis le fichier JSON
  let contacts = [];
  if (fs.existsSync(contactDataPath)) {
    const data = fs.readFileSync(contactDataPath, "utf8");
    contacts = JSON.parse(data);
  }

  // Ajouter le nouveau contact
  const newContact = { id: Date.now(), name, email, phone, message };
  contacts.push(newContact);

  // Sauvegarder les contacts mis à jour dans le fichier JSON
  fs.writeFileSync(contactDataPath, JSON.stringify(contacts, null, 2));

  // Envoyer une réponse de confirmation
  res
    .status(201)
    .json({ message: "Contact ajouté avec succès.", contact: newContact });
};

// Exporter les fonctions pour pouvoir les utiliser dans les routes
module.exports = { addContact };

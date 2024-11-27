console.log("Backend: contactRoutes appelé !");
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Route POST pour ajouter un contact
router.post("/", contactController.addContact);

// Tu peux ajouter d'autres routes ici si besoin
// Par exemple :
// router.get('/', contactController.getContacts);

module.exports = router;

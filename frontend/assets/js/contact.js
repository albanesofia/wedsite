document.addEventListener("DOMContentLoaded", () => {
  console.log("Frontend: contact.js chargé !");

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.reset();
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Empêche le rechargement de la page

      // Récupération des données du formulaire
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      console.log("Form data: ", data);
      alert("Votre message a été envoyé avec succès !");

      try {
        // Appel API vers le backend
        const response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        if (!response.ok) {
          //   alert("Votre message a été envoyé avec succès !");
          // } else {
          alert("Erreur lors de l'envoi : " + result.error);
        }
      } catch (error) {
        alert("Impossible d'envoyer votre message pour le moment.");
        console.error(error);
      }
    });
  }
});

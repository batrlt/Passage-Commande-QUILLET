document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const basketType = document.getElementById('basketType').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

   if (name && email && basketType && quantity && address) { // Simule l'envoi de la commande alert(`Commande passée avec succès !\n\nNom : ${name}\nEmail : ${email}\nType de corbeille : ${basketType}\nQuantité : ${quantity}\nAdresse : ${address}`); } else { alert("Veuillez remplir tous les champs avant de soumettre le formulaire."); } });
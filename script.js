document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const basketType = document.getElementById('basketType').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const address = document.getElementById('address').value.trim();

    // Vérification des champs
    if (!name || !email || !basketType || !quantity || !address) {
        alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
        return;
    }
    const sheetBestURL = "https://api.sheetbest.com/sheets/b2db0760-b876-4582-a0b6-e9e1b6f51b9b";

    // Vérification de l’email avec une expression régulière
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    // Vérification de la quantité positive
    if (isNaN(quantity) || quantity <= 0) {
        alert("Veuillez entrer une quantité valide et positive.");
        return;
    }

    // Confirmation de la commande
    alert(`Commande passée avec succès !\n\nNom : ${name}\nEmail : ${email}\nType de corbeille : ${basketType}\nQuantité : ${quantity}\nAdresse : ${address}`);

    // Effacer le formulaire après soumission
    document.getElementById('orderForm').reset();
});
function ajouterAuPanier(produit) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    panier.push(produit);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert("Produit ajouté au panier !");
}

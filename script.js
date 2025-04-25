
//Télécharger le CV dans un nouvel onglet
document.querySelector('.btn-cv').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('/assets/CV_2025-02-25_Benjamin_LUABA.pdf', '_blank'); 
  });
  
  //Confirmation formulaire de contact
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Merci pour votre message ! Je vous répondrai bientôt 😊");
    this.reset();
  });
  
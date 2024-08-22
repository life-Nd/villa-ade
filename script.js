 // Fonction pour basculer entre les vues
 function switch_view(buttonId, viewId) {
    // Désactiver toutes les vues et tous les boutons
    var allViews = document.querySelectorAll(".content");
    var allButtons = document.querySelectorAll(".switcher-button");
    allViews.forEach(function (view) {
      view.classList.remove("active");
    });
    allButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    // Activer la vue souhaitée et le bouton correspondant
    document.getElementById(viewId).classList.add("active");
    document.getElementById(buttonId).classList.add("active");
  }

  // Écouteurs d'événements pour chaque bouton
  document
    .getElementById("phase-1")
    .addEventListener("click", function () {
      switch_view("phase-1", "phase-1-content");
    });

  document
    .getElementById("phase-2")
    .addEventListener("click", function () {
      switch_view("phase-2", "phase-2-content");
    });


  document
    .getElementById("estimates")
    .addEventListener("click", function () {
      switch_view("estimates", "estimates-content");
    });

//   document
//     .getElementById("btn-support")
//     .addEventListener("click", function () {
//       switch_view("btn-support", "support");
//     });
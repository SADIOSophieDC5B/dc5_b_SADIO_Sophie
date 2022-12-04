function combinaisonsChiffres() {
  // initialiser une variable pour stocker les combinaisons
  let combinaisons = "";

  // boucle sur les centaines de 0 à 7
  for (let i = 0; i <= 7; i++) {
    // boucle sur les dizaines de i + 1 à 8
    for (let j = i + 1; j <= 8; j++) {
      // boucle sur les unités de j + 1 à 9
      for (let k = j + 1; k <= 9; k++) {
        // ajouter la combinaison ijk à la variable combinaisons
        combinaisons += `${i}${j}${k} `;
      }
    }
  }

  // afficher les combinaisons dans un élément HTML avec l'id "resultat"
  document.getElementById("resultat").innerHTML = combinaisons;
}

combinaisonsChiffres();
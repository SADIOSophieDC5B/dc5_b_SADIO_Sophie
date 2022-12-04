function combinaisonsChiffres() {
  // initialiser une variable pour stocker les combinaisons
  let combinaisons = "";

  // boucle sur les milliers de 0 à 6
  for (let i = 0; i <= 6; i++) {
    // boucle sur les centaines de i + 1 à 7
    for (let j = i + 1; j <= 7; j++) {
      // boucle sur les dizaines de j + 1 à 8
      for (let k = j + 1; k <= 8; k++) {
        // boucle sur les unités de k + 1 à 9
        for (let l = k + 1; l <= 9; l++) {
          // ajouter la combinaison ijkl à la variable combinaisons
          combinaisons += `${i}${j}${k}${l} `;
        }
      }
    }
  }

  // afficher les combinaisons dans un élément HTML avec l'id "resultat"
  document.getElementById("resultat").innerHTML = combinaisons;
}

combinaisonsChiffres();
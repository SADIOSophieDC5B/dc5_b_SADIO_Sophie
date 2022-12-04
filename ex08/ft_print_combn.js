function combinaisonsChiffres(n) {
  // vérifier que n est un nombre valide (0 < n < 10)
  if (typeof n !== "number" || n <= 0 || n >= 10) {
    console.error("n doit être un nombre strictement positif et inférieur à 10");
    return;
  }

  // initialiser une variable pour stocker les combinaisons
  let combinaisons = "";

  // boucle sur les valeurs de i de 0 à 9 - n (pour générer des combinaisons de n chiffres)
  for (let i = 0; i <= 9 - n; i++) {
    // initialiser une variable pour stocker la combinaison courante
    let combinaison = "";

    // boucle sur les valeurs de j de i + 1 à 9
    for (let j = i + 1; j <= 9; j++) {
      // ajouter j à la combinaison courante
      combinaison += j;

      // si la combinaison courante a atteint la longueur souhaitée (n), l'ajouter aux combinaisons
      if (combinaison.length === n) {
        combinaisons += `${combinaison} `;
      }
    }
  }

  // afficher les combinaisons dans la console de développement
  console.log(combinaisons);
}

combinaisonsChiffres(2);
combinaisonsChiffres(3);
combinaisonsChiffres(4);
combinaisonsChiffres(9);
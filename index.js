import countries from "./data/countries.js";

//afficher le nom de chaque pays
countries.map((country) => {
  //console.log(country.name);
});

//afficher le nombre de victoires en finale de Coupe du Monde de chaque pays
countries.map((country) => {
  //console.log(country.victories.length);
});

//trier les pays par nombre de victoires et de participations en finale de Coupe du Monde, par ordre décroissant
const countriesSortedByVictoriesDesc = countries.sort(
  (country1, country2) => country2.victories.length - country1.victories.length
);

//console.log(countriesSortedByVictoriesDesc);

//trier les pays par nombre de victoires et de participations en finale de Coupe du Monde, par ordre décroissant
const countriesSortedByVictoriesAndParticipationsDesc = countries.sort(
  (country1, country2) =>
    country2.victories.length === country1.victories.length
      ? country2.finals.length - country1.finals.length
      : country2.victories.length - country1.victories.length
);

//console.log(countriesSortedByVictoriesAndParticipationsDesc);

const sortCountriesByVictoriesDesc = (countries) =>
  //trier les pays par nombre de victoires et de participations en finale de Coupe du Monde, par ordre décroissant
  countries.sort(
    (country1, country2) =>
      country2.victories.length - country1.victories.length
  );

//trier les pays par nombre de victoires et de participations en finale de Coupe du Monde, par ordre décroissant
const sortCountriesByVictoriesAndParticipationsDesc = (countries) =>
  countries.sort((country1, country2) =>
    country2.victories.length === country1.victories.length
      ? country2.finals.length - country1.finals.length
      : country2.victories.length - country1.victories.length
  );

export {
  sortCountriesByVictoriesAndParticipationsDesc,
  sortCountriesByVictoriesDesc,
};

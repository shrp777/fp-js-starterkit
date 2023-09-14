//obtenir une liste des pays qui ont remporté au moins une finale de coupe du monde
const getWorldCupWinners = (countries) =>
  countries.filter((country) => country.victories.length > 0);

//obtenir une liste des pays qui n'ont jamais perdu une finale de coupe du monde
const getWorldCupNeverLoosers = (countries) =>
  getWorldCupWinners(countries).filter(
    (country) => country.finals.length === country.victories.length
  );

const getWorldCupFinalsInEurope = (finals) =>
  finals.filter((final) => final.location.continent === "Europe");

//obtenir une liste des finales qui se sont déroulées dans un continent passé en paramètre
const getWorldCupFinalsByContinent = (finals, continent) =>
  finals.filter((final) => final.location.continent === continent);

//obtenir une liste des finales qui se sont déroulées dans un continent passé en paramètre
//getWorldCupWinnersByContinent::(array,string)->object
const getWorldCupWinnersByContinent = (countries, continent) =>
  countries.filter(
    (country) => country.victories.length && country.continent === continent
  );

export {
  getWorldCupWinners,
  getWorldCupNeverLoosers,
  getWorldCupFinalsInEurope,
  getWorldCupFinalsByContinent,
  getWorldCupWinnersByContinent,
};

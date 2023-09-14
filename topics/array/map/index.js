//obtenir une liste du nom de chaque pays qui a participé à une finale de coupe du monde
const getWorldCupFinalistCountryName = (countries) =>
  countries.map((country) => country.name);

//obtenir une liste du nombre de victoire pour chaque pays qui a participé à une finale de coupe du monde
const getWorldCupFinalistCountryNameAndVictoriesNumber = (countries) =>
  countries.map((country) => {
    return { name: country.name, victories: country.victories.length };
  });

export {
  getWorldCupFinalistCountryName,
  getWorldCupFinalistCountryNameAndVictoriesNumber,
};

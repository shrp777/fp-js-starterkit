const ASC = 1;
const DESC = -1;

const getCountriesSortedByName = (countries, order = ASC) =>
  order === DESC
    ? countries.sort((countryA, countryB) =>
        countryB["name"].localeCompare(countryA["name"])
      )
    : countries.sort((countryA, countryB) =>
        countryA["name"].localeCompare(countryB["name"])
      );

export { getCountriesSortedByName, ASC, DESC };

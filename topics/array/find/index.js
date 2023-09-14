//getWinningAverageByCountry:: (array, string) -> number | Error
const getWinningAverageByCountry = (countries, countryName) => {
  const country = countries.find(
    (value, index, obj) => value.name === countryName
  );

  if (country) {
    if (country.victories.length === 0) return 0;
    return Math.round((country.victories.length / country.finals.length) * 100);
  }
  return new Error(
    `${countryName} has never participated in a World Cup final`
  );
};

export { getWinningAverageByCountry };

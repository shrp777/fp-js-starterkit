const findLastWorldCupWinnerByContinent = (countries, continent) => {
  const winnersByContinent = countries.filter(
    (country) => country.victories.length && country.continent === continent
  );

  if (winnersByContinent.length === 0)
    return new Error(`No country on ${continent} has won the world cup`);

  winnersByContinent.forEach((winner) =>
    winner.victories.sort((yearA, yearB) => yearA - yearB)
  );

  const winnersByContinentWithAscSortedVictories = winnersByContinent.map(
    (winner) => {
      winner.victories.sort((yearA, yearB) => yearA - yearB);
      return winner;
    }
  );

  return winnersByContinentWithAscSortedVictories
    .sort(
      (countryA, countryB) =>
        countryA.victories[countryA.victories.length - 1] -
        countryB.victories[countryB.victories.length - 1]
    )
    .pop();
};

export { findLastWorldCupWinnerByContinent };

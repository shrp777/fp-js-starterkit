import { describe, expect, test } from "@jest/globals";
import countries from "./data/countries";
import finals from "./data/finals";
import {
  getWorldCupWinners,
  getWorldCupNeverLoosers,
  getWorldCupFinalsInEurope,
  getWorldCupFinalsByContinent,
  getWorldCupWinnersByContinent,
} from "../topics/array/filter";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("getWorldCupWinners : get World Cup finals winners", () => {
  test("There should be 8 countries", () => {
    expect(getWorldCupWinners(countries).length).toEqual(8);
  });
});

describe("getWorldCupNeverLoosers : get World Cup finals never loosers", () => {
  test("There should be 3 countries", () => {
    expect(getWorldCupNeverLoosers(countries).length).toEqual(3);
  });
});

describe("getWorldCupFinalsInEurope : get World Cup finals in Europe", () => {
  test("There should be 9 finals in Europe", () => {
    expect(getWorldCupFinalsInEurope(finals).length).toEqual(9);
  });
});

describe("getWorldCupFinalsByContinent : get World Cup finals by Continent", () => {
  test("There should be 9 finals in Europe", () => {
    expect(getWorldCupFinalsByContinent(finals, "Europe").length).toEqual(9);
  });
  test("There should be 9 finals in Central America", () => {
    expect(
      getWorldCupFinalsByContinent(finals, "Central America").length
    ).toEqual(2);
  });
  test("There should be 3 finals in Asia", () => {
    expect(getWorldCupFinalsByContinent(finals, "Asia").length).toEqual(3);
  });
  test("There should be 1 final in Africa", () => {
    expect(getWorldCupFinalsByContinent(finals, "Africa").length).toEqual(1);
  });
  test("There should be 9 finals in North America", () => {
    expect(
      getWorldCupFinalsByContinent(finals, "North America").length
    ).toEqual(2);
  });
});

describe("getWorldCupWinnersByContinent : get World Cup winners by continent", () => {
  test("There should be 5 World Cup Winners in Europe", () => {
    expect(getWorldCupWinnersByContinent(countries, "Europe").length).toEqual(
      5
    );
  });
  test("There should be 3 World Cup Winners in South America", () => {
    expect(
      getWorldCupWinnersByContinent(countries, "South America").length
    ).toEqual(3);
  });
  test("There should be 0 World Cup Winners in Asia", () => {
    expect(getWorldCupWinnersByContinent(countries, "Asia").length).toEqual(0);
  });
});

import { describe, expect, test } from "@jest/globals";
import countries from "./data/countries";
import finals from "./data/finals";
import { getWinningAverageByCountry } from "../topics/array/find";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("getWinningAverageByCountry : get World Cup finals winners", () => {
  test("Italy has a winning average of 67%", () => {
    expect(getWinningAverageByCountry(countries, "Italy")).toEqual(67);
  });
  test("Brazil has a winning average of 71%", () => {
    expect(getWinningAverageByCountry(countries, "Brazil")).toEqual(71);
  });
  test("Spain has a winning average of 100%", () => {
    expect(getWinningAverageByCountry(countries, "Spain")).toEqual(100);
  });
  test("France has a winning average of 50%", () => {
    expect(getWinningAverageByCountry(countries, "France")).toEqual(50);
  });
  test("Netherlands has a winning average of 0%", () => {
    expect(getWinningAverageByCountry(countries, "Netherlands")).toEqual(0);
  });
  test("returns an Error if country has never participated in a World Cup final", () => {
    expect(getWinningAverageByCountry(countries, "Japan")).toBeInstanceOf(
      Error
    );
  });
  test("returns an Error with message 'CountryName has never participated in a World Cup final' if country has never participated in a World Cup final", () => {
    expect(getWinningAverageByCountry(countries, "Japan").message).toMatch(
      `Japan has never participated in a World Cup final`
    );
  });
});

import { findLastWorldCupWinnerByContinent } from "../topics/array/mixed";

import { describe, expect, test } from "@jest/globals";
import countries from "./data/countries";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("findLastWorldCupWinnerByContinent : get last World Cup Winner by continent", () => {
  test("Should return France", () => {
    expect(findLastWorldCupWinnerByContinent(countries, "Europe").name).toMatch(
      "France"
    );
  });
  test("Should return Argentina", () => {
    expect(
      findLastWorldCupWinnerByContinent(countries, "South America").name
    ).toMatch("Argentina");
  });
  test("Should return Error", () => {
    expect(
      findLastWorldCupWinnerByContinent(countries, "Africa")
    ).toBeInstanceOf(Error);
  });
  test("Should return Error with message : No country on Africa has won the world cup", () => {
    expect(
      findLastWorldCupWinnerByContinent(countries, "Africa").message
    ).toMatch(`No country on Africa has won the world cup`);
  });
});

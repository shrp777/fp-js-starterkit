import { describe, expect, test } from "@jest/globals";
import countries from "./data/countries";
import {
  getWorldCupFinalistCountryName,
  getWorldCupFinalistCountryNameAndVictoriesNumber
} from "../topics/array/map";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("getWorldCupFinalistCountryName : get an array of World Cup finalists name", () => {
  test("Array should contain 13 items", () => {
    expect(
      getWorldCupFinalistCountryNameAndVictoriesNumber(countries).length
    ).toEqual(13);
  });
  test("Array should contain 13 items", () => {
    expect(
      getWorldCupFinalistCountryNameAndVictoriesNumber(countries).sort().pop()
        .name
    ).toBe("Netherlands");
  });
});

describe("getWorldCupFinalistCountryName : get an array of World Cup finalists name", () => {
  test("Array should contain 13 items", () => {
    expect(getWorldCupFinalistCountryName(countries).length).toEqual(13);
  });
  test("Array should contain each name provided in provided data", () => {
    expect(getWorldCupFinalistCountryName(countries).sort()).toEqual(
      [
        "England",
        "Italy",
        "France",
        "Argentina",
        "Brazil",
        "Germany",
        "Spain",
        "Uruguay",
        "Croatia",
        "Sweden",
        "Czechoslovakia",
        "Hungary",
        "Netherlands"
      ].sort()
    );
  });
});

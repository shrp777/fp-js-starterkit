import { describe, expect, test } from "@jest/globals";
import countries from "./data/countries";
import {
  getCountriesSortedByName,
  ASC,
  DESC
} from "../topics/functions/default-parameters";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("getCountriesSortedByName : get World Cup finalist countries ordered by name ASC (by default)", () => {
  test("It should return Argentina when order is ASC by default", () => {
    expect(getCountriesSortedByName(countries)[0].name).toMatch("Argentina");
  });
  test("It should return Argentina when order is explicitely ASC", () => {
    expect(getCountriesSortedByName(countries, ASC)[0].name).toMatch(
      "Argentina"
    );
  });
  test("It should return Argentina when order is explicitely DESC", () => {
    expect(getCountriesSortedByName(countries, DESC)[0].name).toMatch(
      "Uruguay"
    );
  });
});

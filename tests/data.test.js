import { describe, expect, test } from "@jest/globals";
import countries from "../data/countries";
import finals from "../data/finals";

import testcountries from "./data/countries";
import testfinals from "./data/finals";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("For tests to be meaningful, the tested values (../data) must match the saved values (./tests/data)", () => {
  test("Test countries should be equal to countries", () => {
    expect(testcountries).toStrictEqual(countries);
  });
  test("Test finals should be equal to finals", () => {
    expect(testfinals).toStrictEqual(finals);
  });
});

import { describe, expect, test } from "@jest/globals";
import data from "./data/countries";
import {
  sortCountriesByVictoriesAndParticipationsDesc,
  sortCountriesByVictoriesDesc,
} from "../topics/array/sort";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("sortCountriesByVictoriesAndParticipationsDesc : Sort countries by number of participations and victories in World Cup finals (Desc)", () => {
  test("1st country is Brazil", () => {
    expect(sortCountriesByVictoriesAndParticipationsDesc(data)[0].name).toBe(
      "Brazil"
    );
  });

  test("2nd country is Germany", () => {
    expect(sortCountriesByVictoriesAndParticipationsDesc(data)[1].name).toBe(
      "Germany"
    );
  });

  test("3rd country is Italy", () => {
    expect(sortCountriesByVictoriesAndParticipationsDesc(data)[2].name).toBe(
      "Italy"
    );
  });

  test("Last country is Sweden", () => {
    expect(sortCountriesByVictoriesAndParticipationsDesc(data).pop().name).toBe(
      "Sweden"
    );
  });
});

describe("sortCountriesByVictoriesDesc : Sort countries by number of victories in World Cup finals (Desc)", () => {
  test("1st country is Brazil", () => {
    expect(sortCountriesByVictoriesDesc(data)[0].name).toBe("Brazil");
  });
});

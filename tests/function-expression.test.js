import { describe, expect, test } from "@jest/globals";
import countries from "./data/countries";
import * as emoji from "node-emoji";

import {
  upperCaseFormat,
  lowerCaseFormat,
  reversedFormat,
  starFormat,
  flagFormat
} from "../topics/functions/expressions";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("upperCaseFormat : get country name in Upper Case", () => {
  test("Should return ENGLAND", () => {
    expect(upperCaseFormat(countries[0])).toBe("ENGLAND");
  });
});

describe("lowerCaseFormat : get country name in Lower Case", () => {
  test("Should return england", () => {
    expect(lowerCaseFormat(countries[0])).toBe("england");
  });
});

describe("reversedFormat : get country name reversed", () => {
  test("Should return dnalgnE", () => {
    expect(reversedFormat(countries[0])).toBe("dnalgnE");
  });
  test("Should return England", () => {
    expect(reversedFormat({ name: "dnalgnE" })).toBe("England");
  });
});

describe("starFormat : get country name with a star for each World Cup victory", () => {
  test("Should return England *", () => {
    expect(starFormat(countries[0])).toBe("England *");
  });
  test("Should return Italy ****", () => {
    expect(starFormat(countries[1])).toBe("Italy ****");
  });
  test("Should return Netherlands (with 0 * symbol because of 0 World Cup victory)", () => {
    expect(starFormat(countries.pop())).toBe("Netherlands");
  });
});

describe("flagFormat : get country name with a flag Emoji", () => {
  test("Should return England " + emoji.get("flag"), () => {
    expect(flagFormat.emoji(countries[0])).toBe("England " + emoji.get("flag"));
  });
});

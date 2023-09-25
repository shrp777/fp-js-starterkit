import { describe, expect, test } from "@jest/globals";
import { add } from "../src/mathematics";

describe("Some dummy tests suite", () => {
  test("add(1,1) should return 2", () => {
    expect(add(1, 1)).toEqual(2);
  });
  test("add('a','b') should return Error", () => {
    expect(add("a", "b")).toBeInstanceOf(Error);
  });
});

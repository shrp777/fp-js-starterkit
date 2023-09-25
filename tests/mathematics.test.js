import { describe, expect, test } from "@jest/globals";
import { add, divide } from "../src/mathematics";

describe("Some dummy tests suite", () => {
  test("add(1,1) should return 2", () => {
    expect(add(1, 1)).toEqual(2);
  });
  test("add('a','b') should return Error", () => {
    expect(add("a", "b")).toBeInstanceOf(Error);
  });
  test("divide(10)(2) should return 5", () => {
    expect(divide(10)(2)).toEqual(5);
  });
  test("divide('a')('b') should return Error", () => {
    expect(divide("a")("b")).toBeInstanceOf(Error);
  });
  test("divide('a')('b') should return Error", () => {
    expect(divide(0)("b")).toBeInstanceOf(Error);
  });
  test("divide('a')('b') should return Error", () => {
    expect(divide(2)(0)).toBeInstanceOf(Error);
  });
  test("divide('a') should return Function", () => {
    expect(divide(2)).toBeInstanceOf(Function);
  });
});

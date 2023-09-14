import { describe, expect, test } from "@jest/globals";
import countries from "./data/countries";
import finals from "./data/finals";
import { getTotalAttendance } from "../topics/array/reduce";

/**
 *Please note, the tests are highly dependent on the values provided, based on factual data.
 *If the values are updated, the tests should be updated too.
 */

describe("getTotalAttendance : Get Total Attendance in all Word Cup finals", () => {
  test("Should be equal to 1796566", () => {
    expect(getTotalAttendance(finals)).toEqual(1796566);
  });
});

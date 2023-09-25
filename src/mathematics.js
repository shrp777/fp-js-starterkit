/**
 * add :: a, b -> a + b
 * @param {Number} a
 * @param {Number} b
 * @returns {Number|Error}
 */
const add = (a, b) =>
  typeof a === "number" && typeof b === "number"
    ? a + b
    : new Error("Params a and b must be of type Number");

//with curryfication
/**
 * divide :: (a, b) -> a / b
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const divide = (a) => (b) =>
  typeof a === "number" && typeof b === "number" && a > 0 && b > 0
    ? a / b
    : new Error("Params a and b must be of type Number and > 0");

export { add, divide };

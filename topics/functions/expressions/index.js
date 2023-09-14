import * as emoji from "node-emoji";
//function declaration
function upperCaseFormat(country) {
  return country.name.toUpperCase();
}

//function expression
const lowerCaseFormat = function (country) {
  return country.name.toLowerCase();
};

//function expression
//explicit return
const reversedFormat = (country) => {
  return country.name.split("").reverse().join("");
};

//function expression
//implicit return
const starFormat = (country) =>
  country.name +
  country.victories
    .map((victory, index) => (index === 0 ? " *" : "*"))
    .join("");

//named function
const flagFormat = {
  emoji: (country) => `${country.name} ` + emoji.get("flag")
};

// IIFE
// Immediately Invoked Function Expression

//classic format
// (function (countries) {
//   return countries[0].name;
// })(countries);

//arrow function short format
// ((countries) => countries[0].name)(countries);

export {
  upperCaseFormat,
  lowerCaseFormat,
  reversedFormat,
  starFormat,
  flagFormat
};

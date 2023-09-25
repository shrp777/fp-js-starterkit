const countries = [
  "Brazil",
  "Germany",
  "Uruguay",
  "Argentina",
  "Spain",
  "France",
  "England",
  "Italy"
];
console.log(countries);

countries.slice(0, 1); //pure
console.log(countries);

countries.splice(0, 1); //impure
console.log(countries);

// console.log(countries);

// /**
//  * [
//   'Brazil',  'Germany',
//   'Uruguay', 'Argentina',
//   'Spain',   'France',
//   'England', 'Italy'
// ]
//  */

// countries.copyWithin(0, 1);
// console.log(countries);

// /**
//  * [
//   'Germany',   'Uruguay',
//   'Argentina', 'Spain',
//   'France',    'England',
//   'Italy',     'Italy'
// ]
//  */

// countries.fill("Italy");
// console.log(countries);
// /**
//  * [
//   'Italy', 'Italy',
//   'Italy', 'Italy',
//   'Italy', 'Italy',
//   'Italy', 'Italy'
// ]
//  */

// countries.pop();
// console.log(countries);
// /**
//  * [
//   'Italy', 'Italy',
//   'Italy', 'Italy',
//   'Italy', 'Italy',
//   'Italy'
// ]
//  */

// // pop();
// // push();
// // reverse();
// // shift();
// // sort();
// // splice();
// // unshift();

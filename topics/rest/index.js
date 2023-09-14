//rest parameters
//
function sum_all(...args) {
  let total = 0;
  args.map((a) => (total += a));
  return total;
}

const result = sum_all(1, 2, 3); //6

console.log(result);

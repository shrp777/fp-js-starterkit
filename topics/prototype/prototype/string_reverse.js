String.prototype.reverse = function (str) {

    if (!str) str = this;

    const reversed = [...str].reverse().join("");
    return reversed;

}

const hello = "hello";

const reversed = hello.reverse();

console.log(hello);
console.log(reversed);



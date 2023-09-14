function shuffle() {
    let currentIndex = this.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [this[currentIndex], this[randomIndex]] = [
            this[randomIndex], this[currentIndex]];
    }

    return this;

}

Array.prototype.shuffle = shuffle;

const planets = [
    "Terre",
    "Vénus",
    "Mars",
    "Saturne",
    "Uranus",
    "Jupiter",
    "Mercure",
    "Neptune",
];

planets.shuffle();

console.log(planets);


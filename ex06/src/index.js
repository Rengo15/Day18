let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);
let newRock = new Map([...rockStar].filter(([key,value]) => key[0]>"a"));
// Only change code below this line

// Only change code above this line
console.log(newRock);
module.exports = {rockStar, newRock};
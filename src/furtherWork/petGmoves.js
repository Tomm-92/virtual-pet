const {
    damageValues,
    attackMoves
} = require("./furtherWork/gameProperties.js");

class Move {
    constructor() {
        this.damage = damageValues[Math.floor(Math.random() * damageValues.length)];
        this.name = attackMoves.sort(() => 0.5 - Math.random()).slice(0,3);
    }

 }

 module.exports = Move;
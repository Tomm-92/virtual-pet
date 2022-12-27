const {
    damageValues
} = require("./gameProperties.js");

class Move {
    constructor(damage) {
     this.damage = damageValues[Math.floor(Math.random() * damageValues.length)];
    }

 }

 module.exports = Move;
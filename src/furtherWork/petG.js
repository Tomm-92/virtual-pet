// GAME STYLE PET
const {
    grootTypes,
    battleCries,
    attackMoves
} = require("./gameProperties.js");


POTION_HEAL = 10;


class Groot {
    constructor(name, moves=[]) {
        this.name = name
        this.battlecry = battleCries[Math.floor(Math.random() * battleCries.length)];
        this.moves = moves;
        this.species = grootTypes[Math.floor(Math.random() * grootTypes.length)];
        this.weakness = this.weakness;
        this.health = 100;
       
    }

get isAlive() {
    return this.health > 0;
}

battleCry(groot) {
    this.health += 5
    return `${this.name} shouts ${this.battlecry}`
}

/*attack(target, move) {
const hasMove = this.moves.includes(move)
if (hasMove) {
    target.health -= move.damage;
    return `${target.name} health reduced to ${target.health}`;
} else {
    return `${this.name} doesn't have that move!`;
}
} */

attack(target) {
    target.health -= this.moves
    return `${target.name} health reduced to ${target.health}`;
}

heal(groot) {
    this.health += POTION_HEAL
    return `${this.name} health increased by ${POTION_HEAL}`;
}

}





 











module.exports = Groot
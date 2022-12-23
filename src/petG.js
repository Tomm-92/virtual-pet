// GAME STYLE PET

class Groot {
    constructor(name, battlecry, moves=[]) {
        this.name = name;
        this.battlecry = battlecry;
        this.moves = moves;
        this.weakness = this.weakness;
        this.health = 100;
        this.weakness = this.weakness;
    }

get isAlive() {
    return this.health > 0;
}

attack(target,move) {
const hasMove = this.moves.includes(move)
if (hasMove) {
    target.health -= move.damage;
    return `${target.name} health reduced to ${target.health}`;
} else {
    return `${this.name} doesn't have that move!`;
}
}
}

 











module.exports = Groot
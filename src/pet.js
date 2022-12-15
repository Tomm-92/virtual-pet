function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;
}

Pet.prototype.walk = function () {
    if ((this.fitness +4) <= MAXIMUM_FITNESS) {
        this.fitness +=4;
    } else {
    this.fitness = MAXIMUM_FITNESS;
}
}

Pet.prototype.feed = function () {
 const hunger = 5;
    if ((this.hunger -3) < MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
 } else {
    this.hunger -= 3;
 }
}

module.exports = Pet;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.health = 'Check on me'
}

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const ADD_FINTESS = 4;

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;
}

Pet.prototype.walk = function () {

    if ((this.fitness + ADD_FINTESS) <= MAXIMUM_FITNESS) {
        this.fitness += ADD_FINTESS;
    } else {
    this.fitness = MAXIMUM_FITNESS;
}
}

Pet.prototype.feed = function () {
const REDUCE_HUNGER = 3
    if ((this.hunger - REDUCE_HUNGER) < MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
 } else {
    this.hunger -= REDUCE_HUNGER;
 }
}

Pet.prototype.checkUp = function () {
    if (this.fitness <= 3) {
    return 'I need a walk'
}

if (this.hunger >= 5) {
    this.health = 'I am hungry'
}
if (this.hunger >= 5 && this.fitness <= 3) {
    this.health = 'I am hungry AND I need a walk'
} 
if (this.hunger < 5 && this.fitness > 3) {
    this.health = 'I feel great'
} 
}

   

module.exports = Pet;
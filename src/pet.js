function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    /*this.health = 'Check on me' */
}

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const ADD_FINTESS = 4;

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  }

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive');
    }
}

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive');
      }   
   
    if (this.isAlive = false) {
    return 'Your pet is no longer alive'
    } 
    if ((this.fitness + ADD_FINTESS) <= MAXIMUM_FITNESS) {
    return this.fitness += ADD_FINTESS;
    } 
    return this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.feed = function () {
const REDUCE_HUNGER = 3
if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }    

if ((this.hunger - REDUCE_HUNGER) < MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
 } else {
    this.hunger -= REDUCE_HUNGER;
 }
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        return 'Your pet is no longer alive'
    }
   
    if (this.hunger >= 5 && this.fitness <= 3) {
        return 'I am hungry AND I need a walk'
    }
    if (this.fitness <= 3) {
    return 'I need a walk'
}

    if (this.hunger >= 5) {
    return 'I am hungry'
}
   else {
    return 'I feel great'
}
}

   
/* Pet.prototype.isAlive = function () {
if (this.fintess <= 0) {
    return false;
}
if (this.hunger >= 10) {
    return false;
}
if (this.age >= 30) {
    return false;
}
    else {
    return true;
} 
} */

module.exports = Pet;
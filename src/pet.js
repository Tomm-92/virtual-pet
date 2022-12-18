const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0; 
const FITNESS_INCREASE = 4;
const MINIMUM_HUNGER = 0;
const REDUCE_HUNGER = 3;
const ACCEPTABLE_HUNGER = 5
const ACCEPTABLE_FITNESS = 3

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    }
}

Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;

    if (this.fitness < 0) {
    this.fitness = MINIMUM_FITNESS;
    }
}

Pet.prototype.walk = function () {

   if ((this.fitness + FITNESS_INCREASE) > MAXIMUM_FITNESS) {
        this.fitness = MAXIMUM_FITNESS;
    } else {
        this.fitness += FITNESS_INCREASE;
    }
}

Pet.prototype.feed = function () {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive');
      }    

    if ((this.hunger - REDUCE_HUNGER) >= 0) {
        this.hunger -= REDUCE_HUNGER;
    } else {
        this.hunger = MINIMUM_HUNGER
    }
}

Pet.prototype.checkUp = function () {
    if (this.fitness <= ACCEPTABLE_FITNESS && this.hunger >= ACCEPTABLE_HUNGER) {
    return 'I am hungry AND I need a walk'
    }
    if (this.fitness <= ACCEPTABLE_FITNESS) {
    return 'I need a walk'
    }
    if (this.hunger >= ACCEPTABLE_HUNGER) {
    return "I am hungry"
    } else {
    return 'I feel great'
    }
}


















/*
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    /*this.health = 'Check on me' 


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

*/

   
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
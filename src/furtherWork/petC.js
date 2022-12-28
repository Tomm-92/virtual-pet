// Class Syntax Pet

const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0; 
const FITNESS_INCREASE = 4;
const MINIMUM_HUNGER = 0;
const REDUCE_HUNGER = 3;
const ACCEPTABLE_HUNGER = 5
const ACCEPTABLE_FITNESS = 3
const MAXIMUM_HUNGER = 10
const MAXIMUM_AGE = 30


class Pet1 {
    constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
}

get isAlive() {
    return this.fitness > MINIMUM_FITNESS && this.hunger < MAXIMUM_HUNGER && this.age < MAXIMUM_AGE;
}

growUp() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive');
      }  
    
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;

    if (this.fitness < 0) {
    this.fitness = MINIMUM_FITNESS;
    }
}

walk() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive');
      }  
   
    if ((this.fitness + FITNESS_INCREASE) > MAXIMUM_FITNESS) {
        this.fitness = MAXIMUM_FITNESS;
    } else {
        this.fitness += FITNESS_INCREASE;
    }
}

feed() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive');
      }    

    if ((this.hunger - REDUCE_HUNGER) >= 0) {
        this.hunger -= REDUCE_HUNGER;
    } else {
        this.hunger = MINIMUM_HUNGER
    }
}

checkUp() {

if (!this.isAlive) {
    return 'Your pet is no longer alive'
}

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

adoptChild(child) {
    this.children.push(child);

}

haveBaby(babyname) {
    const baby = new Pet1(babyname)
    this.children.push(baby);
}
}

module.exports = Pet1;
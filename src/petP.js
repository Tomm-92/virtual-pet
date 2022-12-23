// PROTOTYPE SYNTAX PET

const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0; 
const FITNESS_INCREASE = 4;
const MINIMUM_HUNGER = 0;
const REDUCE_HUNGER = 3;
const ACCEPTABLE_HUNGER = 5
const ACCEPTABLE_FITNESS = 3
const MAXIMUM_HUNGER = 10
const MAXIMUM_AGE = 30

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.fitness > MINIMUM_FITNESS && this.hunger < MAXIMUM_HUNGER && this.age < MAXIMUM_AGE;
    }
}

Pet.prototype.growUp = function () {
    
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

Pet.prototype.walk = function () {

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive');
      }  
   
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

Pet.prototype.adoptChild = function (child) {
    this.children.push(child);
}

Pet.prototype.haveBaby = function (babyName) {
    const baby = new Pet(babyName)
    this.children.push(baby);
}


module.exports = Pet;



/* HAVE BABY and ADOPT CHILD - please ignore - this will be used for revision purposes only

For adoptChild we are creating 2 instances of pet (via the test) e.g. 1 parent and 1 child. Then calling a method on the parent (via Pet) to push the child instances in to the parent.
The children property of the parent is defined in the pet function as an emptry array and there is where we want to add the child to.

For haveBaby we are only making one instance of pet which is the parent. Then calling a method on the parent pet which you pass the child's name (as opposed to object) into as an argument.
Here we initiate a new instance of pet from inside the haveBaby method. 

The outcome of the two approaches is the same but the number of instacnes of a new pet created are different. The benefit of the first method is that the parent objects children can then caontain objects
that don't necessarily have to be an instance of pet. */
const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Alfie')).toBeInstanceOf(Object);
  });
  it('sets the name property of pet', () => {
    const pet = new Pet('Alfie')
    expect(pet.name).toBe('Alfie')
  });
  it('has an intial age of 0', () => {
    const pet = new Pet('Alfie')
    expect(pet.age).toEqual(0)
  });
  });

describe('growUp', () => {
  it('throws en error if the pet is alive', () => {
    const pet = new Pet('Fido');
    pet.hunger = 20
    expect (() => pet.growUp()).toThrow('Your pet is no longer alive');
  });
  it('increases the age of the pet by 1', () => {    
    const pet = new Pet('Mac')
    pet.growUp()
    expect(pet.age).toEqual(1);
  });
  it('increases the hunger of the pet by 5', () => {    
    const pet = new Pet('Mac')
    pet.growUp()
    expect(pet.hunger).toEqual(5);
  });
  it('decreases the fitness of the pet by 5', () => {    
    const pet = new Pet('Mac')
    pet.growUp()
    expect(pet.fitness).toEqual(7);
  });
  
});

describe('walk', () => {
  it('throws en error if the pet is alive', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0
    expect (() => pet.walk()).toThrow('Your pet is no longer alive');
  });
  
  
  it('increases the fitness of the pet by 4', () => {    
      const pet = new Pet('Dennis')
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
    it('prevents the fitness of the pet exceeding 10', () => {    
      const pet = new Pet('Dennis')
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {
    
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive');
    });
   
    it('decreases the hunger by 3', () => {
      const pet = new Pet('Prince');
      pet.hunger = 5;
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });  

    it('decreases hunger by 3 to a minimum of 0', () => {
      const pet = new Pet('Prince');
      pet.hunger = 1;
      pet.feed();  
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('checkUp', () => {

    it('checks if the pet is still alive', () => {
      const pet = new Pet ('Dave');
      pet.checkUp();
      expect(pet.isAlive).toBe(true)
    });
   
    it('checks if the pet needs a walk', () => {
        const pet = new Pet ('Prince');
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a walk')
      });

    
      it('checks if the pet is hungry', () => {
        const pet = new Pet ('Prince');
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry')
      });

      it('checks if the pet is hungry and needs a walk', () => {
        const pet = new Pet ('Prince');
        pet.fitness = 3
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
      });


      it('checks if the pet is feeling great', () => {
        const pet = new Pet ('Prince');
        pet.fitness = 5
        pet.hunger = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I feel great')
      });
});

     describe('isAlive', () => {
      it('confirms if pet is no longer alive', () => {
          const pet = new Pet ('Dave');
          pet.fitness = 0;
          pet.hunger = 20;
          pet.age = 30;
          expect(pet.isAlive).toBe(false)
        });
      
        it('checks the pet is still alive', () => {
          const pet = new Pet ('Dave');
          pet.hunger = 8;
          pet.age = 10;
          expect(pet.isAlive).toBe(true)
        });     
      });

















 /* describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Prince')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Prince');
  
      expect(pet.name).toEqual('Prince');
    });

    it('has an intial age of 0', () => {
      const pet = new Pet('Prince');
  
      expect(pet.age).toEqual(0);
    });

  });

  describe('growUp', () => {
    it('throws en error if the pet is alive', () => {
      const pet = new Pet('Fido');
      pet.hunger = 20
      expect (() => pet.growUp()).toThrow('Your pet is no longer alive');
    });
    
    it('increments the age by 1', () => {
      const pet = new Pet('Prince');

      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });  
  });

  describe('walkPet', () => {
    
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.fitness = 0;

      expect(() => pet.walk()).toThrow('Your pet is no longer alive');
    });
    
    it('increments the fitness by 4', () => {
      const pet = new Pet('Prince');

      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });  

    it('increases fitness by 4 to a maximum of 10', () => {
      const pet = new Pet('Prince');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });

  });

  describe('feedPet', () => {
    
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive');
    });
   
    it('decreases the hunger by 3', () => {
      const pet = new Pet('Prince');

      pet.hunger = 5;
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });  

    it('decreases hunger by 3 to a minimum of 0', () => {
      const pet = new Pet('Prince');
  
      pet.hunger = 1;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
  });

 describe('checkUp', () => {

    it('checks if the pet needs a walk', () => {
        const pet = new Pet ('Prince');
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a walk')
      });

    
      it('checks if the pet is hungry', () => {
        const pet = new Pet ('Prince');
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry')
      });

      it('checks if the pet is hungry and needs a walk', () => {
        const pet = new Pet ('Prince');
        pet.fitness = 3
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
      });


      it('checks if the pet is feeling great', () => {
        const pet = new Pet ('Prince');
        pet.fitness = 5
        pet.hunger = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I feel great')
      });

      it('checks if the pet is still alive', () => {
        const pet = new Pet ('Dave');
        pet.checkUp();
        expect(pet.isAlive).toBe(true)
      });
});

describe('isAlive', () => {
  it('checks the pet is old enough to be alive', () => {
      const pet = new Pet ('Dave');
      pet.fitness = 0;
      expect(pet.isAlive).toBe(false)
    });

  it('checks the pet is young enough to be alive', () => {
      const pet = new Pet ('Dave');
      pet.age = 30;
      expect(pet.isAlive).toBe(false)
    });
  
  it('checks if pets has starved', () => {
      const pet = new Pet ('Dave');
      pet.hunger = 20;
      expect(pet.isAlive).toBe(false)
    });

    it('checks the pet is still alive', () => {
      const pet = new Pet ('Dave');
      pet.hunger = 8;
      pet.age = 10;
      expect(pet.isAlive).toBe(true)
    }); 



  });
*/
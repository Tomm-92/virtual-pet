
// PROTOTYPE SYNTAX PET

const Pet = require('../src/petTrack');

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

      describe('adoptChild', () => {
        it('passes the child into the parent object ', () => {
            const parent = new Pet ('Dave');
            const child = new Pet('Amelia');
            parent.adoptChild(child);
            expect(parent.children[0]).toBe(child)
          });
          

          it('feeds the child ', () => {
            const parent = new Pet ('Mick');
            const child = new Pet('Sarah');
            parent.adoptChild(child);
            expect(child.hunger).toEqual(0);

            parent.children[0].growUp(child);
            expect(parent.children[0].hunger).toEqual(5);

            parent.children[0].feed(child);
            expect(parent.children[0].hunger).toBe(2);
          });
          
        });


        describe('haveBaby', () => {
          it('creates a new object inside the same instance of pet ', () => {
              const parent = new Pet ('Dave');
              parent.haveBaby('John');
              expect(parent.children[0].name).toBe('John');
              expect(parent.children[0].fitness).toEqual(10);
              expect(parent.children[0]).toBeInstanceOf(Pet);
      
              parent.haveBaby('Mark');
              expect(parent.children[1].name).toBe('Mark');
              expect(parent.children[1].fitness).toEqual(10);
              expect(parent.children[1]).toBeInstanceOf(Pet);
            });
          });


  

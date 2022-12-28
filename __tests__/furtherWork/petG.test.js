// GAME STYLE PET

const Groot = require('../../src/furtherWork/petG');
const Move = require('../../src/petGmoves');

describe ('constructor', () => {
    it('returns an object', () => {
        expect(new Groot('Geralt')).toBeInstanceOf(Object);
    })
    it('sets the name property of the groot', () => {
        const groot = new Groot('Geralt')
        expect(groot.name).toBe('Geralt')
    }
    )
});

describe ('isAlive', () => {
    it('checks whether the groot is still alive', () => {
    const groot = new Groot('Tyrion');
    groot.health = 50;
    expect(groot.isAlive).toBe(true);
    })

    it('confirms the groot is no longer alive', () => {
        const groot = new Groot('Tyrion');
        groot.health = 0;
        expect(groot.isAlive).toBe(false);
        })
         
});

describe ('attack', () => {
    it('allows the groot to attack their target if they have access to the move', () => {
    const fireball = new Move(30);
    const groot = new Groot('Tyrion',[fireball]);
    const target = new Groot('Cercei');
    groot.attack(target,fireball);
    expect(target.health).toEqual(70);
    })
});

describe ('heal', () => {
    it('allows the groot to heal themselves', () => {
    const target = new Groot('Cercei');
    target.heal();
    expect(target.health).toEqual(110);
    })
});

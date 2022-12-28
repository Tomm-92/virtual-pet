//generate random species for the groot

const grootTypes = [
   'adder',
   'agama',
   'blind snake',
   'blue racer',
   'boa constrictor',
   'bushmaster',
   'diamond python',
   'habu',
   'whip snake',
   'viper',
   'sidewinder',
   'ringhals',
   'python',
   'pit viper',
   'massasauga'
   ];

// generate a battle cry for the groot - to be used when new pet is created and when an attack is made

const battleCries = [
    'your souls are ours!',
    'bring them to their knees!',
    'chaos and anarchy!',
    'we stand together!',
    'dont run, youre already dead!',
    'feed them to the maggots!',
    'obliterate them from history!',
    'death to the enemy!',
    'swift and savage!',
    'let the crows feast tonight!',
    'death and glory!',
    'glory to us all!',
    'prepare to die!'
];

const attackMoves = [
    'Comet Punch',
    'Mega Punch',
    'Thunder Punch',
    'Guillotine',
    'Wing Attack',
    'Slam',
    'Mega Kick',
    'Low Kick'
]

const damageValues = [
    1,
    2,
    3,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    100
]

   module.exports = {grootTypes, battleCries, attackMoves, damageValues};
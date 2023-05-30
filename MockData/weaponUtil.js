const data = [
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Longsword",
    type: "weapon",
    desc: "A balanced weapon, versatile for many situations.",
    flavor:
      "The longsword gleams in the torchlight, its blade sharp and ready for battle.",
    effects: [],
    properties: {
      weaponType: "Longsword",
      weaponCategory: "Sword",
      damage: {
        melee: 8,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Rapier",
    type: "weapon",
    desc: "A finesse weapon, ideal for quick, precise strikes.",
    flavor:
      "The rapier's slender blade shines menacingly, ready to strike with deadly precision.",
    effects: [],
    properties: {
      weaponType: "Rapier",
      weaponCategory: "Sword",
      damage: {
        melee: 8,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Greatsword",
    type: "weapon",
    desc: "A heavy, two-handed weapon for powerful attacks.",
    flavor:
      "The greatsword is a symbol of raw power, its massive blade capable of cleaving enemies in two.",
    effects: [],
    properties: {
      weaponType: "Greatsword",
      weaponCategory: "Sword",
      damage: {
        melee: 12,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Battle Axe",
    type: "weapon",
    desc: "A versatile weapon, can be used one or two-handed.",
    flavor:
      "The battle axe, with its sharp, heavy head, is a formidable weapon in the hands of a skilled warrior.",
    effects: [],
    properties: {
      weaponType: "Battle Axe",
      weaponCategory: "Axe",
      damage: {
        melee: 8,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Throwing Axe",
    type: "weapon",
    desc: "A light weapon that can be used for melee or ranged attacks.",
    flavor:
      "The throwing axe is a versatile tool, equally deadly in close combat or when hurled at an enemy.",
    effects: [],
    properties: {
      weaponType: "Throwing Axe",
      weaponCategory: "Axe",
      damage: {
        melee: 6,
        ranged: 6,
      },
      range: { melee: 1, thrown: 4 },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Longbow",
    type: "weapon",
    desc: "A ranged weapon, requires two hands and strength to use effectively.",
    flavor:
      "The longbow, with its tall, curved stave, can send arrows flying over great distances.",
    effects: [],
    properties: {
      weaponType: "Longbow",
      weaponCategory: "Bow",
      damage: {
        melee: undefined,
        ranged: 4,
      },
      range: { melee: undefined, thrown: 15 },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Halberd",
    type: "weapon",
    desc: "A versatile weapon, combining the reach of a spear and the power of an axe.",
    flavor:
      "The halberd is a symbol of the foot soldier, its long reach and deadly blade a threat to any enemy.",
    effects: [],
    properties: {
      weaponType: "Halberd",
      weaponCategory: "Polearm",
      damage: {
        melee: 10,
        ranged: undefined,
      },
      range: { melee: 2, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Spear",
    type: "weapon",
    desc: "A simple weapon, can be thrown or used in melee.",
    flavor:
      "The spear is a humble weapon, but in skilled hands, it can be deadly.",
    effects: [],
    properties: {
      weaponType: "Spear",
      weaponCategory: "Polearm",
      damage: {
        melee: 6,
        ranged: 6,
      },
      range: { melee: 1, thrown: 5 },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Mace",
    type: "weapon",
    desc: "A simple, sturdy weapon, good for bashing through armor.",
    flavor:
      "The mace, with its heavy, spiked head, is a brutal weapon, capable of crushing armor and bone alike.",
    effects: [],
    properties: {
      weaponType: "Mace",
      weaponCategory: "Blunt",
      damage: {
        melee: 6,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Warhammer",
    type: "weapon",
    desc: "A two-handed weapon, designed to crush armor.",
    flavor:
      "The warhammer is a weapon of raw force, its heavy head capable of smashing through the toughest defenses.",
    effects: [],
    properties: {
      weaponType: "Warhammer",
      weaponCategory: "Blunt",
      damage: {
        melee: 10,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Dagger",
    type: "weapon",
    desc: "A light weapon, can be used for melee or thrown.",
    flavor:
      "The dagger is a weapon of subtlety, its small size making it ideal for quick, unexpected attacks.",
    effects: [],
    properties: {
      weaponType: "Dagger",
      weaponCategory: "Knife",
      damage: {
        melee: 4,
        ranged: 4,
      },
      range: { melee: 1, thrown: 3 },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Whip",
    type: "weapon",
    desc: "A finesse weapon with reach, can disarm opponents.",
    flavor:
      "The whip cracks through the air, its long, flexible length ready to disarm or trip up enemies.",
    effects: [],
    properties: {
      weaponType: "Whip",
      weaponCategory: "Exotic",
      damage: {
        melee: 4,
        ranged: undefined,
      },
      range: { melee: 2, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Nunchaku",
    type: "weapon",
    desc: "A light, fast weapon, often used in flurries of strikes.",
    flavor:
      "The nunchaku whirls in a dazzling display, its swift strikes a blur to the untrained eye.",
    effects: [],
    properties: {
      weaponType: "Nunchaku",
      weaponCategory: "Exotic",
      damage: {
        melee: 6,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Sai",
    type: "weapon",
    desc: "A short, pointed weapon, can be used to parry attacks.",
    flavor:
      "The sai gleams with a deadly light, its pointed tips ready to strike or parry incoming attacks.",
    effects: [],
    properties: {
      weaponType: "Sai",
      weaponCategory: "Exotic",
      damage: {
        melee: 4,
        ranged: undefined,
      },
      range: { melee: 1, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Bo Staff",
    type: "weapon",
    desc: "A simple, two-handed weapon with extended reach, good for quick, sweeping attacks and keeping enemies at a distance.",
    flavor:
      "The bo staff, with its impressive length, is a picture of simplicity and control. Its wielder can deliver swift, sweeping strikes while maintaining a safe distance from their foes.",
    effects: [],
    properties: {
      weaponType: "Bo Staff",
      weaponCategory: "Exotic",
      damage: {
        melee: 6,
        ranged: undefined,
      },
      range: { melee: 2, thrown: undefined },
    },
    bonus: undefined,
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Sling",
    type: "weapon",
    desc: "A simple ranged weapon, can use stones as ammunition.",
    flavor:
      "The sling, a simple loop of leather, can send stones hurtling towards enemies with surprising force.",
    effects: [],
    properties: {
      weaponType: "Sling",
      weaponCategory: "Ranged",
      damage: {
        melee: undefined,
        ranged: 4,
      },
      range: { melee: undefined, thrown: 8 },
    },
    bonus: undefined,
  },
];

export const getWeapons = () => data;

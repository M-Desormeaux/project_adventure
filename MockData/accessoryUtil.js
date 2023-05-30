const data = [
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Amulet of Health",
    type: "accessory",
    baseValue: 0,
    desc: "An amulet that boosts the wearer's vitality.",
    flavor: "This amulet glows with a soft, comforting light.",
    effects: [],
    properties: {},
    bonus: [
      {
        statTarget: "endurance",
        value: 0,
      },
    ],
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Ring of Protection",
    type: "accessory",
    baseValue: 0,
    desc: "A ring that enhances the wearer's defenses.",
    flavor: "This ring is adorned with intricate protective runes.",
    effects: [],
    properties: {},
    bonus: [
      {
        statTarget: "armorClass",
        value: 0,
      },
    ],
  },
  {
    isConsumable: false,
    isCursed: false,
    isFocus: false,
    name: "Cloak of Invisibility",
    type: "accessory",
    baseValue: 0,
    desc: "A cloak that can render the wearer invisible.",
    flavor: "This cloak seems to shimmer and blend into the surroundings.",
    effects: [
      {
        bias: ["Void"],
        name: "Invisibility",
        desc: "The wearer becomes invisible.",
        duration: 0,
        potency: 0,
        effectTarget: "Self",
        range: {
          rangeType: "Self",
          value: 0,
        },
      },
    ],
    properties: {},
    bonus: [],
  },
];

export const getAccessories = () => data;

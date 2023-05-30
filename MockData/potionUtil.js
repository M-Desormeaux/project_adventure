const data = [
  {
    isConsumable: true,
    isCursed: false,
    isFocus: false,
    name: "Potion of Healing",
    type: "potion",
    baseValue: 0,
    desc: "A potion that heals the drinker.",
    flavor: "This potion glows with a soft, comforting light.",
    effects: [
      {
        bias: ["Light"],
        name: "Healing",
        desc: "Restores health to the drinker.",
        duration: 0,
        potency: 10,
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
  {
    isConsumable: true,
    isCursed: false,
    isFocus: false,
    name: "Potion of Strength",
    type: "potion",
    baseValue: 0,
    desc: "A potion that enhances the drinker's strength.",
    flavor: "This potion is a deep, vibrant red.",
    effects: [
      {
        bias: ["Earth"],
        name: "Strength",
        desc: "Increases the drinker's strength.",
        duration: 1,
        potency: 2,
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

export const getPotions = () => data;

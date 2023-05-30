const data = [
  {
    isConsumable: true,
    isCursed: false,
    isFocus: false,
    name: "Spider Venom",
    type: "poison",
    baseValue: 0,
    desc: "A potent venom extracted from a giant spider.",
    flavor: "This venom is a thick, dark liquid.",
    effects: [
      {
        bias: ["Dark"],
        name: "Poison",
        desc: "Causes damage over time to the target.",
        duration: 3,
        potency: 4,
        effectTarget: "Range",
        range: {
          rangeType: "Touch",
          value: 1,
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
    name: "Nightshade Extract",
    type: "poison",
    baseValue: 0,
    desc: "A deadly poison extracted from the nightshade plant.",
    flavor: "This poison is a thin, clear liquid, almost like water.",
    effects: [
      {
        bias: ["Void"],
        name: "Deadly Poison",
        desc: "Causes severe damage to the target.",
        duration: 1,
        potency: 10,
        effectTarget: "Range",
        range: {
          rangeType: "Touch",
          value: 1,
        },
      },
    ],
    properties: {},
    bonus: [],
  },
];

export const getPoisons = () => data;

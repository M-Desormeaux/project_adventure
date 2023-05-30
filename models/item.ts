//#region Bias
type Bias =
  | "Fire"
  | "Water"
  | "Earth"
  | "Air"
  | "Lightning"
  | "Ice"
  | "Metal"
  | "Sound"
  | "Dark"
  | "Light"
  | "Void";
//#endregion

//#region WeaponType
type WeaponType =
  // default types of weapon
  | "Longsword"
  | "Rapier"
  | "Greatsword"
  | "Battle Axe"
  | "Throwing Axe"
  | "Longbow"
  | "Halberd"
  | "Spear"
  | "Mace"
  | "Warhammer"
  | "Dagger"
  | "Whip"
  | "Nunchaku"
  | "Sai"
  | "Bo Staff"
  | "Sling";
//#endregion

//#region WeaponCategory
type WeaponCategory =
  | "Sword"
  | "Axe"
  | "Bow"
  | "Polearm"
  | "Blunt"
  | "Knife"
  | "Exotic"
  | "Ranged";
//#endregion

//#region StatTargetValue
type StatTargetValue =
  | "strength"
  | "agility"
  | "endurance"
  | "intellect"
  | "willpower"
  | "charism";
//#endregion

//#region EffectTargetValue
type EffectTargetValue = "Self" | "Range" | "Reach";
//#endregion

//#region Effect
type Effect = {
  bias: Bias[] | undefined;
  name: string;
  desc: string;
  duration: number;
  potency: number;
  effectTarget: EffectTargetValue;
  range: {
    rangeType: string;
    value: number;
  };
};
//#endregion

//#region DiceRoll
type DiceRoll = "d4" | "d6" | "d8" | "d10" | "d12";
//#endregion

//#region Bonus
interface Bonus {
  statTarget: StatTargetValue;
  value: number; // pos or neg
}
//#endregion

interface ArmorProps {
  // name to change
  armorClass: number;
  requirement:
    | {
        statTarget: StatTargetValue;
        value: number;
      }
    | undefined;
  hasStealthDisadvantage: boolean;
}

interface WeaponProps {
  weaponType: WeaponType; // default weapon name
  weaponCategory: WeaponCategory; // category of weapon

  damage: {
    melee: DiceRoll;
    ranged: DiceRoll;
  };

  range: {
    melee: number;
    thrown: number;
  };
}

interface RopeProps {
  length: number;
}

interface PotionProps {
  effect: Effect;
  duration: number;
}

export interface Item {
  isConsumable: boolean;
  isCursed: boolean;
  isFocus: boolean;

  name: string;
  type: "weapon" | "armor" | "tool" | "potion" | "poison" | "accessory";
  // itemWeight: number;

  baseValue: number;
  desc: string;
  flavor: string;

  effects: (undefined | Effect)[];
  properties: {} | ArmorProps | WeaponProps | PotionProps | RopeProps;
  bonus: undefined | Bonus[];
}

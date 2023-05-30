import {
  getWeapons,
  getArmors,
  getAccessories,
  getPoisons,
  getPotions,
} from "@/MockData";
import { ItemCard } from "@/components/ItemCard/ItemCard";

const Heading = ({ size, children }: any) => {
  if (!children) return null;

  switch (true) {
    case size === "2":
      return (
        <h2 className="inline px-4 pb-1 pt-2 text-xl font-semibold">
          {children}
        </h2>
      );
    default:
      return (
        <h1 className="inline px-3 pb-1 pt-5 text-2xl font-semibold">
          {children}
        </h1>
      );
  }
};

export default function Home() {
  const weapons = getWeapons();
  const armors = getArmors();
  const accessories = getAccessories();
  const poisons = getPoisons();
  const potions = getPotions();

  if (!weapons || !armors) return null;

  return (
    <div className="flex flex-col gap-2 p-5">
      <Heading>Items</Heading>
      <details>
        <summary>
          <Heading size="2">Armor: {armors.length}</Heading>
        </summary>
        {armors.map((armor, index) => (
          <ItemCard item={armor} key={index} />
        ))}
      </details>
      <hr />
      <details>
        <summary>
          <Heading size="2">Accessories: {accessories.length}</Heading>
        </summary>
        {accessories.map((accessory, index) => (
          <ItemCard item={accessory} key={index} />
        ))}
      </details>
      <hr />
      <details>
        <summary>
          <Heading size="2">Poisons: {poisons.length}</Heading>
        </summary>
        {poisons.map((poison, index) => (
          <ItemCard item={poison} key={index} />
        ))}
      </details>
      <hr />
      <details>
        <summary>
          <Heading size="2">Potions: {potions.length}</Heading>
        </summary>
        {potions.map((potion, index) => (
          <ItemCard item={potion} key={index} />
        ))}
      </details>
      <hr />
      <details>
        <summary>
          <Heading size="2">Weapons: {weapons.length}</Heading>
        </summary>
        {weapons.map((weapon, index) => (
          <ItemCard item={weapon} key={index} />
        ))}
      </details>
      <hr />
    </div>
  );
}

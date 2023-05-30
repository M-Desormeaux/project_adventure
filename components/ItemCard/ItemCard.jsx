export const ItemCard = ({ item }) => (
  <div className="my-2 rounded border border-gray-900 p-4">
    <div>
      <h3 className="text-lg">{item.name || item.weaponType}</h3>
      <p className="text-xs">{item.desc}</p>
    </div>

    <hr />

    <q className="text-sm italic">{item.flavor}</q>
  </div>
);

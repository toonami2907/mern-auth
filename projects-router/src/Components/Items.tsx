import  { useState } from 'react';

const Item = ({ item, addItemToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: { target: { value: string; }; }) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="border p-4 m-2">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-500">${item.price}</p>
      <div className="flex items-center mt-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
        />
        <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
  onClick={() => addItemToCart(item, quantity)}
>
  Add to Cart
</button>

      </div>
    </div>
  );
};

export default Item;

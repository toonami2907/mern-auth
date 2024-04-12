import React from 'react';




const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <div>
            <p>{item.name}</p>
            <p className="text-gray-500">Quantity: {item.quantity}</p>
          </div>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => removeFromCart(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

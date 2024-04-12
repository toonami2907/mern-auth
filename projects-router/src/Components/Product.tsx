import React, { useState } from 'react';
import Item from './Items';
import Cart from './Cart/Cart';
import Notification from './Notification';

const Product = () => {
  const [cartItems, setCartItems] = useState([]);

  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
  ];

  const addItemToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Calculate total items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mx-auto p-4 relative">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <Item key={item.id} item={item} addItemToCart={addItemToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      {totalItems > 0 && <Notification count={totalItems} />} {/* Render Notification if there are items in the cart */}
    </div>
  );
};

export default Product;

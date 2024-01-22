'use client'
import React from 'react';
import { useCart } from '@/components/CartContext'; 
import ButtonMain from '@/components/ButtonMain';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <ButtonMain name="Remove" onClick={() => removeFromCart(product.id)} />
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div>
          <ButtonMain name="Clear Cart" onClick={clearCart} />
        </div>
      )}
    </div>
  );
};

export default Cart;

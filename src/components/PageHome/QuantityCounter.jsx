import React, { useState } from 'react';
import { useCart } from '../../context/CartContext'; // Importa o hook do contexto
import { IconShoppingCartPlus } from '@tabler/icons-react';

export default function QuantityCounter({ product, size }) {
  const { addToCart } = useCart(); // Pegando a função addToCart do contexto
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, size, quantity); // Adiciona o produto ao carrinho com a quantidade e tamanho
  };

  return (
    <>
    <div className="flex justify-between items-center space-x-2 ">
      <button
        onClick={decrement}
        className="px-2 py-2 bg-gray-700 text-white rounded-md"
        aria-label="Decrease quantity"
      >
        -
      </button>
      
      <input
        type="text"
        className="w-10 text-center flex  rounded-md bg-neutral-600 text-white font-bold py-2"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
      />

      <button
        onClick={increment}
        className="px-2 py-2 bg-gray-700 text-white rounded-md"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
    <div>
        <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-[#D0051F] w-[100%] text-white font-bold rounded-md"
        >
        <IconShoppingCartPlus/>
        </button>
    </div>
    </>
  );
}
"use client"
import { useCart } from "../../context/CartContext";
import { IconTrash } from '@tabler/icons-react';

export function TableProducts(){
    const { cart, removeFromCart, incrementQuantity, decrementQuantity  } = useCart();

    return(
        <div className="overflow-x-auto">
          <table className="w-full max-w-6xl mx-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left hidden sm:table-row">
              <th className="p-4 text-lg font-bold">Produtos</th>
              <th className="p-4 text-lg font-bold">Quantidade</th>
              <th className="p-4 text-lg font-bold">Valor</th>
              <th className="p-4 text-lg font-bold">Remover</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-300 flex flex-col sm:table-row sm:flex-row"
              >
                {/* Coluna Produtos */}
                <td className="p-4 flex items-center">
                  <img
                    className="w-20 h-20 mr-4 sm:mr-0"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="sm:pl-4">
                    <h2 className="font-bold text-xl">{item.name}</h2>
                    <p className="text-lg text-gray-600">Size: {item.size}</p>
                  </div>
                </td>

                {/* Coluna Quantidade */}
                <td className="p-4 flex sm:table-cell items-center sm:justify-center">
                  <div className="flex items-center">
                    <button
                      className="bg-gray-300 p-2 rounded"
                      onClick={() => decrementQuantity(item.id, item.size)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <p className="mx-4 text-xl">{item.quantity}</p>
                    <button
                      className="bg-gray-300 p-2 rounded"
                      onClick={() => incrementQuantity(item.id, item.size)}
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Coluna Valor Total */}
                <td className="p-4 text-xl font-semibold sm:table-cell">
                  ${item.price * item.quantity}.00
                </td>

                {/* Coluna Remover */}
                <td className="p-4 flex sm:table-cell ">
                  <button
                    className="bg-red-600 text-white py-2 px-4 rounded-md font-bold"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    <IconTrash/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
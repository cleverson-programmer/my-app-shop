"use client"
import { useCart } from "../../context/CartContext";

export function Resume(){
    const { cart } = useCart();

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return(
        <div className="mb-10 w-[200px] sm:w-[300px] sm:mb-2">
          <p className="font-bold">Resumo</p>
          <div className="">
            <p className="flex justify-between mb-4 border-b-[1px] border-gray-200">
              Frete
              <span className="font-medium"></span>
            </p>
            <p className="flex justify-between mb-4 border-b-[1px] border-gray-200">
              Descontos
              <span></span>
            </p>
            <p className="flex justify-between mb-4 border-b-[1px] border-gray-200">
              Total
              <span className="font-medium">${calculateTotal().toFixed(2)}</span>
            </p>
          </div>
          <button type="submit"
          className="bg-black text-white font-bold px-4 py-2 rounded-lg mt-2"
          >Continuar</button>
        </div>
      
    );
}
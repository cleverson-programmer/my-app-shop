"use client"

export function DiscountCoupon(){
    return(
        <div className="mb-10 sm:mb-2">
          <p className="font-bold">Cupom de desconto</p>
          <input
          type="search"
          placeholder="Insira o cupom"
          className="border border-solid border-gray-300 rounded-md pl-4 py-2 mt-6"
          />
        </div>
    );
}
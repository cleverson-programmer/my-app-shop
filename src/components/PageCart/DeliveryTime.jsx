"use client"

export function DeliveryTime(){
    return(
        <div className="mb-10 sm:mb-2">
          <p className="font-bold">Prazo de entrega</p>
          <input
          type="search"
          placeholder="00000-000"
          className="border border-solid border-gray-300 rounded-md pl-4 py-2 mt-6"
          />
        </div>
    );
}
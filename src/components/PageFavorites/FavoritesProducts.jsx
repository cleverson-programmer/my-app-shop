"use client"
import { useFavorites } from '../../context/FavoritesContext';

export function FavoriteProducts(){
    const { favorites } = useFavorites();

    return(
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6'>
            {favorites.length > 0 ? (
            favorites.map(product => (
              <div className='m-4 bg-slate-100 flex justify-center rounded-md border border-solid border-gray-500'>
                <div key={product.id}>
                    <img 
                    className='w-[260px] h-[260px]'
                    src={product.image} 
                    alt={product.name} />
                    <div className='mb-4 flex justify-around items-center w-[100%]'>
                        <h2 className='font-bold uppercase font-[roboto] text-2xl'>{product.name}</h2>
                        <p className='pl-1 font-xl'>${product.price}</p>
                    </div>
                </div>
              </div>
            ))
          ) : (
            <div className=' absolute w-[100%] h-[98vh] flex justify-center items-center'>
                <p className=' text-4xl sm:text-6xl font-bold font-[roboto] uppercase'>No favorites yet.</p>
            </div>
          )}
        </div>
    )
}
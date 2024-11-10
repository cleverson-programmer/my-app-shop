"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import QuantityCounter from "./QuantityCounter";

import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useFavorites } from "../../context/FavoritesContext"

export function ThreeDCardDemo() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
      const getProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
      };
      getProducts();
    }, []);

    const isFavorite = (productId) => favorites.some(fav => fav.id === productId);

    function truncateDescription(description, limit) {
      return description.length > limit
        ? description.slice(0, limit) + '...'
        : description;
    }

    function renderStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const stars = [];
    
      for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      }
    
      if (hasHalfStar) {
        stars.push(<FaStarHalf key="half" className="text-yellow-500" />);
      }
    
      return stars;
    }    

    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        {products.map(product => (
          <CardContainer key={product.id} className="inter-var">
            <CardBody
              className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-15rem sm:w-[30rem] h-[600px] rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl w-full flex justify-between font-bold font-[poppins] uppercase text-neutral-600 dark:text-white">
                {product.name}

                  <button onClick={() => toggleFavorite(product)}>
                  {isFavorite(product.id) ? <IconHeartFilled className="text-[#D0051F]" /> : <IconHeart className="text-[#D0051F]" />}
                  </button>
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 font-[roboto] dark:text-neutral-300">
                {truncateDescription(product.description, 289)}
              </CardItem>
              
              <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                <Image
                  src={`/images/${product.image}`}
                  height={360}
                  width={360}
                  className="h-60 w-full object-cover rounded-xl "
                  alt={product.name}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-18">
                <CardItem
                  translateZ={20}
                  translateX={-20}
                  as="p"
                  className="px-4 py-2 rounded-xl text-xs flex font-normal dark:text-white">
                  {renderStars(product.rating)}
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={20}
                  as="p"
                  className="px-4 py-2 rounded-xl bg-[#D0051F] dark:bg-white dark:text-black text-white text-xs font-bold">
                  ${product.price}
                </CardItem>
              </div>

              <div className="mt-6">
                <div className="flex justify-between">
                  <label>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="px-4 py-2 text-white font-bold rounded-xl bg-neutral-600 cursor-pointer"
                    >
                      <option className="text-white font-bold" value="">SIZE</option>
                      <option className="text-white font-bold" value="S">S</option>
                      <option className="text-white font-bold" value="M">M</option>
                      <option className="text-white font-bold" value="L">L</option>
                    </select>
                  </label>
                  <QuantityCounter product={product} size={selectedSize} />
                </div>
            </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    );
}

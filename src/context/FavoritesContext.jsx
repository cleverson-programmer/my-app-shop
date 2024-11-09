"use client"
// context/FavoritesContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.find((fav) => fav.id === product.id);
      if (isFavorited) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}


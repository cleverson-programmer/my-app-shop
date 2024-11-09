"use client"
import { FavoriteProducts } from '@/components/PageFavorites/FavoritesProducts';
import { Title } from '@/components/PageFavorites/Title';

export default function FavoritesPage() {
  

  return (
    <div className="favorites-page">
      <Title/>
      <FavoriteProducts/>
    </div>
  );
}

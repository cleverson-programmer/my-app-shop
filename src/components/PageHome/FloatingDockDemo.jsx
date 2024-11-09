"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandInstagram,
  IconHeart,
  IconHome,
  IconUser,
  IconShoppingBag,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation"; // Importa o useRouter do app router

export function FloatingDockDemo() {
  const router = useRouter();

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Cart",
      icon: (
        <IconShoppingBag className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/cart", // URL para a página do carrinho
    },
    {
      title: "Account",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/account",
    },

    {
      title: "Favorites",
      icon: (
        <IconHeart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/favorites",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram 
        className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/cleverson_priv/",
    },
  ];
  return (
    (<div className="flex justify-center fixed bottom-0 z-50 mb-5 w-full">
      <FloatingDock
        // only for demo, remove for production
        items={links} />
    </div>)
  );
}

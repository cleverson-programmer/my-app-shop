"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import Image from "next/image";
import { cn } from "@/lib/utils";

import { Dashboard} from "./Dashboard"
import UserProfile from "./UserProfile"; 
import { Logo, LogoIcon } from "./Logo";

export function SidebarDemo() {
  const [component, setComponent] = useState(false);
  const [open, setOpen] = useState(false);
  
  function handleLinkClick(){
    setComponent(true)
  }

  const auth = getAuth();
    const router = useRouter();
    const [user, setUser] = useState(null)

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }else{
                router.push("/account") //Redirect to page Login
            }
        });

        return () => unsubscribe();

    },[auth, router]);

    const handleLogout = async () =>
    {
        try{
            await signOut(auth);
            // router.push("/account")//Redirect page login after logout
        } catch(error){
            console.log("error signout", error.message)
        }
    };
  
  const links = [
    {
      label: "Store Collection",
      href: "#",
      icon: (
        <IconBrandTabler
        onClick={() => setComponent(false)}
        className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt 
        onClick={handleLinkClick}
        className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft
        onClick={handleLogout}
        className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    (<div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: `${user ? user.displayName : "Guest"}`,
                href: "#",
                icon: (
                  <Image
                    src={user ? user.photoURL : "/default-avatar.jpg"} // Usando a foto do usuário, ou um avatar padrão
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar" />
                ),
              }} />
          </div>
        </SidebarBody>
      </Sidebar>
      {component === false ? (
        <Dashboard />
      ) : (
        <UserProfile user={user} /> // Usando o novo componente com a prop `user`
      )}
    </div>)
  );
}


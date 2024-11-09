"use client";
import { Lens } from "../../components/ui/lens";
import Image from "next/image";
import { cn } from "../../lib/utils";
import imageMain from '../../../public/tenisFuturista.png'

export function LensDemoThird() {
  

  return (
    (<div className="">
      <Lens>
        <div
          className="w-fit relative overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#D0051F] to-[#121318] ">
          
          <div className="relative z-10">
            <Image
              src={imageMain}
              alt="image"
              width={900}
              height={900}
              className="" />

            
          </div>
        </div>
      </Lens>
    </div>)
  );
}

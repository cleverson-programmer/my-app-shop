import React from "react";
import { MacbookScroll } from "../../components/ui/macbook-scroll";
import Link from "next/link";
import imageMain from '../../../public/shoesRed.avif'

export function MacbookScrollDemo() {
  return (
    (<div className="overflow-hidden dark:bg-[#0B0B0F] bg-black w-full">
      <MacbookScroll
        title={
          <span>
            From your device <br /> To your collection 
          </span>
        }
        src={imageMain}
        showGradient={false} />
    </div>)
  );
}


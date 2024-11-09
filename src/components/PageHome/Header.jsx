"use client"
import { LensDemoThird } from "../PageHome/lensThirdDemo";
import { MainText } from "../PageHome/MainText";

export function Header(){

    return(
        <>
            <header className="bg-[#D0051F] flex justify-between">
                <div className="relative">
                    <MainText/>
                </div>
                <div className="">
                    <LensDemoThird/>
                </div>
            </header>
        </>
    )
}
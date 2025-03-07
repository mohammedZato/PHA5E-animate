import React, { useContext } from "react";
import { HeroContext } from "../context";

export default function DisText() {
    const { showText } = useContext(HeroContext);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-center animate-fadeIn">
            {showText && <div className="text-6xl font-extrabold font-serif text-gray-200 mt-[-7rem]">PHA5E</div>}
            <div className="text-gray-300">Loading...</div>
        </div>
    )
}
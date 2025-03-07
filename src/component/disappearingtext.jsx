import React, { useContext } from "react";
import { HeroContext } from "../context";

export default function DisText() {
    const { showText } = useContext(HeroContext);

    return (
        <div className="w-full h-screen flex items-center justify-center text-center">
            {showText && <div className="text-6xl font-extrabold font-serif text-gray-200 mt-[-7rem] animate-fadeIn">PHA5E</div>}
        </div>
    )
}
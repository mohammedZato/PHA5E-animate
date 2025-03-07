import React, { useContext } from "react";
import DisText from "../component/disappearingtext";
import HeroSection from "../component/heroSection";
import { HeroContext } from "../context";

export default function Home() {
    const { showText } = useContext(HeroContext);

    return (
        <div className="bg-gray-900 w-full h-screen z-0">
            {!showText && <HeroSection />}
            {showText && <DisText />}
        </div>
    )
}
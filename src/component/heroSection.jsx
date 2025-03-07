import React from "react";
import field from "./images/field.png"
import pink from "./images/pink-painting.png"
import IT from "./images/IT.png"
import fire from "./images/fire.png"

export default function HeroSection() {
    return (
        <div className="flex justify-center items-center h-[36rem] text-center mt-[-3rem] px-4 py-10 animate-fadeIn">
            <div className="">
                <div className="grid grid-cols-2 gap-16 max-w-2xl sm:gap-24 md:gap-28 relative">
                    <img className="w-full max-w-[25rem] object-cover rounded-sm md:hover:-translate-x-10 transition-transform duration-[1500ms] md:hover:scale-90 lg:hover:-translate-x-32 lg:hover:scale-150" src={pink} alt="pink-image" />
                    <img className="w-full max-w-[25rem] object-cover rounded-sm md:hover:translate-x-10 transition-transform duration-[1500ms] md:hover:scale-90 lg:hover:translate-x-32 lg:hover:scale-150" src={IT} alt="it-image" />
                    <img className="w-full max-w-[25rem] object-cover rounded-sm md:hover:-translate-x-10 transition-transform duration-[1500ms] md:hover:scale-90 lg:hover:-translate-x-32 lg:hover:scale-150" src={fire} alt="fire-image" />
                    <img className="w-full max-w-[25rem] object-cover rounded-sm md:hover:translate-x-10 transition-transform duration-[1500ms] md:hover:scale-90 lg:hover:translate-x-32 lg:hover:scale-150" src={field} alt="field-image" />
                </div>
                <div className="bg-red-700">
                    <p className="text-gray-200 font-extrabold absolute top-[150px] font-serif text-4xl mt-20 sm:text-6xl sm:top-[110px] md:text-7xl md:top-[85px] md:right-8 lg:mx-40">
                        IMAGINING UNIQUE CON- <br />CEPTS AND DIGITAL EXPER- <br />IENCES
                    </p>
                </div>
            </div>
        </div>
    )
}
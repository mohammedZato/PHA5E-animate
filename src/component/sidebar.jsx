import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../context";

export default function Sidebar() {
    const { isOpen } = useContext(HeroContext);

    return ( 
        <aside>
            <div className={`bg-gray-900 w-full h-screen flex flex-col fixed top-[88px] transform transition-transform duration-700 ease-in-out py-8 px-7 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
                <ul>
                    <li className="mb-7">    
                        <NavLink className="text-gray-200 hover:text-gray-700 text-4xl font-bold" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="mb-7">
                        <NavLink className="text-gray-200 hover:text-gray-700 text-4xl font-bold" to="/our-vision">
                            Our Vision    
                        </NavLink>  
                    </li>
                    <li className="mb-7">
                        <NavLink className="text-gray-200 hover:text-gray-700 text-4xl font-bold" to="/our-team">
                            Our Team    
                        </NavLink>  
                    </li>
                    <li className="mb-7">
                        <NavLink className="text-gray-200 hover:text-gray-700 text-4xl font-bold" to="/our-projects">
                            Our Projects 
                        </NavLink>  
                    </li>
                    <li className="mb-7">
                        <NavLink className="text-gray-200 hover:text-gray-700 text-4xl font-bold" to="/contacts">
                            Contact us    
                        </NavLink>  
                    </li>
                    <li className="mb-7">
                        <NavLink className="text-gray-200 hover:text-gray-700 text-4xl font-bold" to="/language">
                            FR/EN
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
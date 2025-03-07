import { Menu, X } from "lucide-react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../context";

export default function Navbar() {
    const { isOpen, setIsOpen } = useContext(HeroContext);

    return (
        <nav>
            <ul className="lg:flex gap-6 hidden">
                <li>
                    <NavLink className="text-gray-200 hover:text-gray-700 text-lg font-medium" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="text-gray-200 hover:text-gray-700 text-lg font-medium" to="/our-vision">
                        Our vision
                    </NavLink>
                </li>
                <li>
                    <NavLink className="text-gray-200 hover:text-gray-700 text-lg font-medium" to="/our-team">
                        Our team
                    </NavLink>
                </li>
                <li>
                    <NavLink className="text-gray-200 hover:text-gray-700 text-lg font-medium" to="/our-projects">
                        Our projects
                    </NavLink>
                </li>
                <li>
                    <NavLink className="text-gray-200 hover:text-gray-700 text-lg font-medium" to="/contacts">
                        Contact us
                    </NavLink>
                </li>
                <li>
                    <NavLink className="text-gray-200 hover:text-gray-700 text-lg font-medium" to="/language">
                        FR/EN
                    </NavLink>
                </li>
            </ul>
            <div onClick={() => setIsOpen(prevState => !prevState)} className="lg:hidden">
               { 
                    isOpen ? 
                    <X className="size-9 text-gray-200 hover:text-gray-700 transition-all"/>
                    : <Menu className="size-10 text-gray-200 hover:text-gray-700 transition-all"/> 
                }
            </div>
        </nav>      
    )
}
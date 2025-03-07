import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
    return(
        <div className="bg-gray-900 px-7 py-5 sticky top-0 flex justify-between items-center z-50">
            <Logo />
            <Navbar />
        </div>
    )
}
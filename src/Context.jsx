import { createContext, useEffect, useState } from "react";

export const HeroContext = createContext();

export default function GlobalState({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [showText, setShowText] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(false);
            setTimeout(() => {
                setShowContent(true)
            }, 500)
        }, 2000)

        return function () {
            clearTimeout(timer);
        }
    }, [])

    return <HeroContext.Provider value={{ isOpen, setIsOpen, showText, showContent}}>{children}</HeroContext.Provider>
}

"use client";
import React, { createContext, useState} from "react"

export const NavContext = createContext({
    menu:false,
    toggleMenu: () => {},
    closeMenu: () => {},
    // profile related
    

})

const NavContextProvider = ({children}) => {
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(state => !state);
    }

    function closeMenu() {
        setMenu(false)
    }
    return (
        <NavContext.Provider value={{ menu, toggleMenu, closeMenu }} >
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider;
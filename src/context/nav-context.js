"use client";
import React, { createContext, useState} from "react"

export const NavContext = createContext({
    menu:false,
    openMenu: () => {},
    closeMenu: () => {},
    

})

const NavContextProvider = ({children}) => {
    const [menu, setMenu] = useState(false);

    function openMenu() {
        setMenu(true);
    }

    function closeMenu() {
        setMenu(false)
    }
    return (
        <NavContext.Provider value={{ menu, openMenu, closeMenu }} >
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider;
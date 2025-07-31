"use client";
import React, { createContext, useState } from "react"

export const NavContext = createContext({
    menu: false,
    toggleMenu: () => { },
    closeMenu: () => { },
    // profile related
    profile: false,
    toggleProfile: () => { },
    closeProfile: () => { },
    //cart related
    /* cart: false,
    toggleCart: () => { },
    closeCart: () => { },
 */

})

const NavContextProvider = ({ children }) => {
    const [menu, setMenu] = useState(false);
    const [profile, setProfile] = useState(false);
    // const [cart, setCart] = useState(false);


    function toggleMenu() {
        setMenu(state => !state);
    }

    function closeMenu() {
        setMenu(false)

    }

    function toggleProfile() {
        setProfile(state => !state);
        setMenu(false)
    }
    function closeProfile() {
        setProfile(false)
    }
    /* 
        function toggleCart() {
            setCart(state => !state);
        }
    
        function closeCart() {
            setCart(false) */

    return (
        <NavContext.Provider value={{
            menu,
            toggleMenu,
            closeMenu,
            profile,
            toggleProfile,
            closeProfile,
            /*  cart,
             toggleCart,
             closeCart */
        }} >
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider;
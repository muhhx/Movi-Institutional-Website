import { createContext, useContext, useState, ReactNode } from "react";
import { ContextProps } from "../types";

type InitialValue = {
    isOpen: boolean;
    handleMenu: () => void;
}

const initialValue = {
    isOpen: false,
    handleMenu: () => {}
}

const MenuContext = createContext<InitialValue>(initialValue)

export const useMenu = () => {
    return useContext(MenuContext)
}

export const MenuProvider = ({ children }: ContextProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue.isOpen)

    const handleMenu = () => {
        setIsOpen(isOpen === true ? false : true)
    }

    return (
        <MenuContext.Provider value={{isOpen, handleMenu}}>
            {children}
        </MenuContext.Provider>
    )
}
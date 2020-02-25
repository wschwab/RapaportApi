import React, { createContext, useContext, useState } from 'react'

export const AddDScreenContext = createContext()
export const AddDScreenProvider = ({ children }) => {
    const [showAddDiamond, setShowAddDiamond] = useState(false)

    return (
        <AddDScreenContext.Provider value={{ showAddDiamond, setShowAddDiamond }}>
            {children}
        </AddDScreenContext.Provider>
    )

}

export const useAddDScreen = () => useContext(AddDScreenContext)

export const ShowDScreenContext = createContext()
export const ShowDScreenProvider = ({ children }) => {
    const [showDiamonds, setShowDiamonds] = useState(false)

    return (
        <ShowDScreenContext.Provider value={{ showDiamonds, setShowDiamonds }}>
            {children}
        </ShowDScreenContext.Provider>
    )
}

export const useShowDScreen = () => useContext(ShowDScreenContext)

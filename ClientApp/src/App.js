import React from 'react'
import Buttons from './components/Buttons'
import AddDiamond from './components/AddDiamond'
import ShowDiamonds from './components/ShowDiamonds'
import { useAddDScreen, useShowDScreen, AddDScreenProvider, ShowDScreenProvider } from './context'

const App = () => {
    const { showAddDiamond } = useAddDScreen()
    const { showDiamonds } = useShowDScreen()

    return (
        <AddDScreenProvider>
            <ShowDScreenProvider>
                <div className="container">
                    {!showAddDiamond && !showDiamonds && <Buttons />}
                    {showAddDiamond && <AddDiamond />}
                    {showDiamonds && <ShowDiamonds />}
                </div>
            </ShowDScreenProvider>
        </AddDScreenProvider>
    )
}

export default App
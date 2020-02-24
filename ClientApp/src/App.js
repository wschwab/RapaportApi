import React, { useEffect } from 'react'
import Buttons from './components/Buttons'
import AddDiamond from './components/AddDiamond'
import ShowDiamonds from './components/ShowDiamonds'
import { useAddDScreen, useShowDScreen } from './context'

const App = () => {
    const { showAddDiamond } = useAddDScreen()
    const { showDiamonds } = useShowDScreen()

    return (
        <div className="container">
            {console.log(`showAdd: ${showAddDiamond}, showAll: ${showDiamonds}`)}
            {
                !showAddDiamond && !showDiamonds ?
                    <Buttons /> :
                    showAddDiamond ?
                        <AddDiamond /> :
                        <ShowDiamonds />
            }
        </div>
    )
}

export default App
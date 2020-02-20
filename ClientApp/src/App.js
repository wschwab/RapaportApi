import React, { useState } from 'react'
import Buttons from './components/Buttons'
import ShowButton from './components/ShowButton'
import AddDiamond from './components/AddDiamond'
import ShowDiamonds from './components/ShowDiamonds'

import './custom.css'

const App = () => {
    const [showAddDiamond, setShowAddDiamond] = useState(false)
    const [showDiamonds, setShowDiamonds] = useState(false)

    return (
        <>
            {
                !showAddDiamond && !showDiamonds ?
                    <Buttons setShowAddDiamond={setShowAddDiamond} setShowDiamonds={setShowDiamonds} /> :
                    showAddDiamond ?
                        <AddDiamond setShowAddDiamond={setShowAddDiamond} /> :
                        <ShowDiamonds setShowDiamonds={setShowDiamonds} />
            }
        </>
    )
}

export default App
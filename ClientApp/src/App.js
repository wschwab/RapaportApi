import React, { useState } from 'react'
import Buttons from './components/Buttons'
import AddDiamond from './components/AddDiamond'
import ShowDiamonds from './components/ShowDiamonds'

const App = () => {
    const [ showAddDiamond, setShowAddDiamond ] = useState(false)
    const [ showDiamonds, setShowDiamonds ] = useState(false)

    return (
        <div className="container">
            {!showAddDiamond && !showDiamonds && <Buttons setShowAddDiamond={setShowAddDiamond} setShowDiamonds={setShowDiamonds} />}
            {showAddDiamond && <AddDiamond setShowAddDiamond={setShowAddDiamond} />}
            {showDiamonds && <ShowDiamonds setShowDiamonds={setShowDiamonds} />}
        </div>
    )
}

export default App
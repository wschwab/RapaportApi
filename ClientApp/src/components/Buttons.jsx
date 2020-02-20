import React from 'react';
import AddButton from './AddButton'
import ShowButton from './ShowButton'

const Buttons = ({ setShowAddDiamond, setShowDiamonds }) => (
    <>
        <AddButton setShowAddDiamond={setShowAddDiamond} />
        <ShowButton setShowDiamonds={setShowDiamonds} />
    </>
)

export default Buttons;
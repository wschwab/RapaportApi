import React from 'react';
import AddButton from './AddButton'
import ShowButton from './ShowButton'

const Buttons = ({ setShowAddDiamond, setShowDiamonds }) => (
    <ul className="btn-list">
        <li className="btn-list_item">
            <AddButton setShowAddDiamond={setShowAddDiamond} />
        </li>
        <li className="btn-list_item">
            <ShowButton setShowDiamonds={setShowDiamonds} />
        </li>
    </ul>
)

export default Buttons;
import React from 'react';
import AddButton from './AddButton'
import ShowButton from './ShowButton'

const Buttons = ({ setShowAddDiamond, setShowDiamonds }) => (
    <ul className="btn-list">
        <div className="btn-list_item__border"><li className="btn-list_item">
            <AddButton setShowAddDiamond={setShowAddDiamond} />
        </li></div>
        <div className="btn-list_item__border"><li className="btn-list_item">
            <ShowButton setShowDiamonds={setShowDiamonds} />
        </li></div>
    </ul>
)

export default Buttons;
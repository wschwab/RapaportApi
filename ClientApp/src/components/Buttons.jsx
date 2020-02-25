import React from 'react';
import AddButton from './AddButton'
import ShowButton from './ShowButton'

const Buttons = () => (
    <ul className="btn-list">
        <div className="btn-list_item__border"><li className="btn-list_item">
            <AddButton />
        </li></div>
        <div className="btn-list_item__border"><li className="btn-list_item">
            <ShowButton />
        </li></div>
    </ul>
)

export default Buttons;
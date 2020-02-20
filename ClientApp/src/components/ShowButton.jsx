import React from 'react'
import { FaList } from 'react-icons/fa'


const ShowButton = ({ setShowDiamonds }) => (
    <div
        role="button"
        onClick={() => setShowDiamonds(true)}
        onKeyDown={() => setShowDiamonds(true)}
        data-testid="button-show-diamonds"
        tabIndex={0}
        aria-label="Show diamond list"
    >
        <span>
            <FaList />
        </span>
            <span>
                Show Diamond List
        </span>
    </div>
)

export default ShowButton
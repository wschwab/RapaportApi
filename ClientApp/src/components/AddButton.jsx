﻿import React from 'react'
import { FaGem } from 'react-icons/fa'

const AddButton = ({ setShowAddDiamond }) => {
    return (
        <div
            className="btn-list_item__add"
            role="button"
            onClick={() => setShowAddDiamond(true)}
            onKeyDown={() => setShowAddDiamond(true)}
            data-testid="button-add-diamond"
            tabIndex={0}
            aria-label="Add diamond to list"
        >
            <span>
                <FaGem />
            </span>
            <span>
                Add Diamond
            </span>
        </div>
    )
}

export default AddButton
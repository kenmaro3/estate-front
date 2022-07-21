import React from 'react'
import SpotItem from './spotitem/SpotItem'
import "./spotlist.scss"

function SpotList() {
    return (
        <div className="spotListContainer">
            <SpotItem />
            <SpotItem />

        </div>

    )
}

export default SpotList
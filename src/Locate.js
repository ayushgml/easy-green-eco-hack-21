import React from 'react'
import Maps from './Maps'
import Header from './Header'
function Locate() {
    return (
        <div className="locate">
            <Header/>
            <div className="locate__map">
                <Maps/>
            </div>
        </div>
    )
}

export default Locate

import React from 'react'
import bg from './bg.png'
import Header from './Header'
import './roadmap.css'

function Roadmap() {
    return (
        <div className="roadmap">
            <Header/>
            {/* <img src={bg} alt="" className="roadmap__bg" /> */}
            <div className="roadmap__cont">
                
                    <button className="roadmap__button">
                        Recyclable waste
                </button>
                
                
                <button className="roadmap__button">
                        Organic waste
                </button>
                
                <button className="roadmap__button">
                        Home-made manure
                </button>
                <button className="roadmap__button">
                        Waste Disposal Methods
                </button>
            </div>
        </div>
    )
}

export default Roadmap

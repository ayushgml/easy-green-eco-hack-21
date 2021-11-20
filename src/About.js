import React from 'react'
import roadmap from './about.png'
import './About.css'
import Header from './Header'

function about() {
    return (
        <div className="about">
            <Header/>
            <img src={roadmap} alt="" className="about__bg" />
        </div>
        
    )
}

export default about

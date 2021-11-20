import React from 'react'
import Header from './Header'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import bg from './eco.png'
import About from './About';
import Map from './Maps';

function Home() {
    return (
        <div>
            <Header/>
            <div className="app__bg">
                <img className="app__backimg" src={ bg } alt="" />
        </div>
        </div>
    )
}

export default Home

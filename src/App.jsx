import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import $ from "jquery";

import Entry from "./Components/Entry";

import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import APB from "./Routes/Episodes/APB";
import Friendsmas from "./Routes/Episodes/Friendsmas";
import Xylk from "./Routes/Episodes/Xylk";
import MarshaAnsTefrondon from "./Routes/Episodes/MarshaAndTefrondon";
import Lowercase from "./Routes/Episodes/Lowercase";
import CCC from "./Routes/CCC";
import RTF from "./Routes/RTF";
import Hex from "./Routes/Hex";
import Archive from "./Routes/Archive";
import Credits from "./Routes/Credits";
import TheBuilders from "./Routes/TheBuilders";

import "./root.css";

const App = () => {

    const getRandomVibrantColor = () => {
        const hue = Math.floor(Math.random() * 360);
        const saturation = '80%'; 
        const lightness = '50%';  
        const color = `hsl(${hue}, ${saturation}, ${lightness})`;
    
        return color;
    };

    const handleCloseMenu = () => {
        $("#nav-container").animate({
            left: "100dvw"
        }, 500);
    }

    const handleOpenMenu = () => {
        $("#nav-container").animate({
            left: "0"
        }, 500);
    }

    setInterval(() => {
        document.getElementById("special-link").style.color = getRandomVibrantColor();
    }, 1000);

    return (
        <>
            <Entry />
            <BrowserRouter>
                <h1 id="open-menu" onClick={handleOpenMenu}> Menu </h1>
                <div id="nav-container">
                    <h1 id="close-menu" onClick={handleCloseMenu}> Close </h1>
                    <nav>
                        <ul>
                            <li onClick={handleCloseMenu}><Link to="/">Home</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/air-plane-boys">Air Plane Boys</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/friendsmas">Friendsmas</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/lowercase">Lowercase</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/community-country-club">Community Country Club</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/marsha-and-tefrondon">Marsha and Tefrondon</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/run-the-flex">Run the Flex</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/xylk">Xylk</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/hex">Hex</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/archive">Archive</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/credits">Credits</Link></li>
                            <li onClick={handleCloseMenu}><Link id="special-link" to="/the-builders">The Builders</Link></li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/air-plane-boys" element={<APB />} />
                    <Route exact path="/friendsmas" element={<Friendsmas />} />
                    <Route exact path="/xylk" element={<Xylk />} />
                    <Route exact path="/marsha-and-tefrondon" element={<MarshaAnsTefrondon />} />
                    <Route exact path="/lowercase" element={<Lowercase />} />
                    <Route excat path="/community-country-club" element={<CCC />} />
                    <Route excat path="/run-the-flex" element={<RTF />} />
                    <Route exact path="/archive" element={<Archive />}/>
                    <Route exact path="/credits" element={<Credits />}/>
                    <Route exact path="/hex" element={<Hex />}/>
                    <Route exact path="/the-builders" element={<TheBuilders />}/>
                    <Route element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <footer>
                <p> Developed by <a href="https://www.instagram.com/hexstudio.io">hexstudio</a></p>
            </footer>
        </>
    )
}

export default App;
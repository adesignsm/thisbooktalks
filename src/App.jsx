import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import $ from "jquery";

//main components
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

//creative components
import GuestBook from "./Routes/GuestBook";
import GuestBookCanvas from "./Routes/GuestBookCanvas";
import TheBuilders from "./Routes/TheBuilders";
import OfflineModesty from "./Routes/Creatives/OfflineModesty";

//offline modesty
import Dominicana from "./Routes/Creatives/OfflineModesty/Dominicana";
import FlowerArt from "./Routes/Creatives/OfflineModesty/FlowerArt";
import MusicGardens from "./Routes/Creatives/OfflineModesty/MusicGardens";

import "./root.css";

const App = () => {
    const [isCreativesOpen, setCreativesOpen] = useState(false);

    const handleCreativesClick = () => {
        setCreativesOpen(!isCreativesOpen);
    };

    useEffect(() => {
        if (window.location.href.indexOf("guest-book-canvas") >= 0) {
            $("#open-menu").hide();
            $("footer").hide();
        } else {
            $("#open-menu").show();
            $("footer").show(); 
        }
    }, []);

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

        if (document.getElementById("special-link-offline-modesty")) {
            document.getElementById("special-link-creatives").style.color = "#000";
            document.getElementById("special-link-offline-modesty").style.color = getRandomVibrantColor();
        } else {
            document.getElementById("special-link-creatives").style.color = getRandomVibrantColor();
        }
    }, 1000);

    return (
        <>
            <BrowserRouter>
                <h2 id="open-menu" onClick={handleOpenMenu}> Menu </h2>
                <div id="nav-container">
                    <h2 id="close-menu" onClick={handleCloseMenu}> Close </h2>
                    <nav>
                        <ul>
                            <li onClick={handleCloseMenu}><Link to="/">Home</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/guest-book">Guestbook</Link></li>
                            <li onClick={handleCloseMenu}><Link to="/guest-book-canvas">Guestbook Canvas</Link></li>
                            <li id="special-link-creatives" onClick={handleCreativesClick}>
                                <span>Creatives</span>
                                {isCreativesOpen && (
                                    <ul className="dropdown">
                                        <li onClick={handleCloseMenu}><Link id="special-link-offline-modesty" to="/offline-modesty">Offline Modesty</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li onClick={handleCloseMenu}><Link id="special-link-builders" to="/the-builders">The Builders</Link></li>
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
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/guest-book" element={<GuestBook />} />
                    <Route exact path="/guest-book-canvas" element={<GuestBookCanvas />} />
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
                    <Route exact path="/offline-modesty" element={<OfflineModesty />}/>
                    <Route exact path="offline-modesty/dominicana" element={<Dominicana />}/>
                    <Route exact path="offline-modesty/flower-art" element={<FlowerArt />}/>
                    <Route exact path="offline-modesty/music-gardens" element={<MusicGardens />}/>
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
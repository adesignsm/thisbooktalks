import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const OfflineModesty = () => {
    return (
        <>
            <main id="offline-modesty-container">
                <div className="title-container">
                    <h1> Offline Modesty </h1>
                </div>
                <div className="art-navigation">
                    <nav>
                        <ul>
                            <li><Link to="./dominicana">Dominicana</Link></li>
                            <li><Link to="./flower-art">Flower Power</Link></li>
                            <li><Link to="./music-gardens">Sound Garden</Link></li>
                        </ul>
                    </nav>
                </div>
            </main>
        </>
    )
}

export default OfflineModesty;
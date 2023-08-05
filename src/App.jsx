import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import APB from "./Routes/Episodes/APB";
import Friendsmas from "./Routes/Episodes/Friendsmas";
import Xylk from "./Routes/Episodes/Xylk";
import MarshaAnsTefrondon from "./Routes/Episodes/MarshaAndTefrondon";
import Lowercase from "./Routes/Episodes/Lowercase";
import Archive from "./Routes/Archive";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/air-plane-boys" element={<APB />} />
                    <Route exact path="/friendsmas" element={<Friendsmas />} />
                    <Route exact path="/xylk" element={<Xylk />} />
                    <Route exact path="/marsha-and-tefrondon" element={<MarshaAnsTefrondon />} />
                    <Route exact path="/lower-case" element={<Lowercase />} />
                    <Route exact path="/archive" element={<Archive />}/>
                    <Route element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
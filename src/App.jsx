import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import APB from "./Routes/Episodes/APB";
import Lowercase from "./Routes/Episodes/Lowercase";
import Xylk from "./Routes/Episodes/Xylk";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/air-plane-boys" element={<APB />} />
                    <Route exact path="/lower-case" element={<Lowercase />} />
                    <Route exact path="/xylk" element={<Xylk />} />
                    <Route element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
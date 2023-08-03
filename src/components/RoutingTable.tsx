import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './About';
import Main from './Main';
import Login from "./Login";
function RoutingTable() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutingTable;
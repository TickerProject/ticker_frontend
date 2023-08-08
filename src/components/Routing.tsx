import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Tasks from "./Tasks";
import CreateTask from "./CreateTask";
function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/createTask" element={<CreateTask />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
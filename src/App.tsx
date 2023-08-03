import React from 'react';
import './App.css';
import Navigator from "./components/Navigator";
import RoutingTable from "./components/RoutingTable";
import LoginButton from "./components/auth/LoginButton";
import Image from "./components/Image";

function App() {
    return (
        <div>
            <LoginButton/>
            <Image imagePath={"./resources/media/logo-white.svg"}></Image>
            <div className="row">
                <div className="col-2">
                    <Navigator/>
                </div>
                <div className="col-5">
                    <RoutingTable/>
                </div>
            </div>
        </div>
    );
}

export default App;

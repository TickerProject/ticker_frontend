import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Routing from "./components/Routing";
import LoginButton from "./components/auth/LoginButton";
import Image from "./components/Image";
import Search from "./components/Search";

function App() {
    return (
        <div className="m-3">
            <div className="row">
                <div className="col-5">
                    {/*<Search/>*/}
                </div>
                <div className="col-6">
                    <div className="float-end">
                        <Search/>
                        <LoginButton/>
                    </div>
                </div>
            </div>
            {/*<Image imagePath={"./resources/media/logo-white.svg"}></Image>*/}
            <div className="row">
                <div className="col-2 mt-lg-3">
                    <Menu/>
                </div>
                <div className="col-9 mt-lg-3">
                    <Routing/>
                </div>
            </div>
        </div>
    );
}

export default App;

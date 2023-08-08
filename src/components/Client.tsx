import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PersistantCombo from "./PersistantCombo";

interface Client {
    name: string;
}

function Client() {
    return (
        <div>
            <PersistantCombo/>
        </div>
    );
}

export default Client;
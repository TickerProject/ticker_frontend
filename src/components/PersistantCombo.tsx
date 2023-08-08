import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormText} from "react-bootstrap";

const enum State  {Save = 'save'}
function PersistentCombo() {

    const context = {};

    // const reducer = (state: string, action: any) => {
    //     if (State.Save === state) {
    //         context.value = action.value;
    //     }
    // }
    return (
        <div>
            <label>List</label>
            <input name="ble" list="sfd, sf, sdf, sdf"/>
            <datalist></datalist>
            <div className="">
                <select className="">
                        <option value="roundTrip">Item 1</option>
                        <option value="oneWay">Item 2</option>
                </select>
            </div>
        </div>
    );
}

export default PersistentCombo;
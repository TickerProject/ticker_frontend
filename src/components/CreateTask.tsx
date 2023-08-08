import React from "react";
import Task from "./Task";

function CreateTask() {

    const task: Task = {
        client: { name: ""},
        code: "",
        matter: { name: ""},
        name: "",
        narrative: "",
        project: {name: ""},
        activityCode: "",
        time: 0,
    }
    return (
        <div className="container">
            <Task  {...task} />
        </div>
    );
}

export default CreateTask;
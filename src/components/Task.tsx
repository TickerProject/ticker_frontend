import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from "./Client";
import Matter from "./Matter";
import Project from "./Project";

interface Task {
    name: string;
    project: Project;
    narrative: string;
    client: Client;
    matter: Matter;
    code: string;
    activityCode: string;
    time: number;
}

function Task(task: Task, readOnly: boolean, vertical: boolean) {
    // if (!task) {
    //     task = {
    //         client: {name: ""},
    //         code: "",
    //         matter: {name: ""},
    //         name: "",
    //         narrative: "",
    //         project: {name: ""},
    //         activityCode: "",
    //         time: 0,
    //     }
    // }
    const [urls, addTask] = React.useState([]);
    const handleSaveTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTask()
    };

    // TODO dynamic IDs/keys
    if (vertical) {
        return (
            <div>
                NOT IMPLEMENTED
            </div>
        );
    } else {
        return (
            <form onSubmit={handleSaveTask}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Task</label>
                    <input defaultValue={task.name} type="text" className="form-control" id="taskName" aria-describedby="task"/>
                        <div id="task" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Project</label>
                    <input defaultValue={task.project.name} type="text" className="form-control" id="projectName" aria-describedby="project"/>
                    <div id="project" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Client</label>
                    <input defaultValue={task.client.name} type="text" className="form-control" id="client" aria-describedby="client"/>
                    <div id="client" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Matter</label>
                    <input defaultValue={task.matter.name} type="text" className="form-control" id="matter" aria-describedby="matter"/>
                    <div id="matter" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Narrative</label>
                    <input defaultValue={task.narrative} type="text" className="form-control" id="narrtive" aria-describedby="narrtive"/>
                    <div id="narrtive" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Narrative</label>
                    <input defaultValue={task.narrative} type="text" className="form-control" id="narrtive" aria-describedby="narrtive"/>
                    <div id="narrtive" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Activity Code</label>
                    <input defaultValue={task.activityCode} type="text" className="form-control" id="activityCode" aria-describedby="activityCode"/>
                    <div id="activityCode" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Time</label>
                    <input defaultValue={task.time} type="text" className="form-control" id="activityCode" aria-describedby="activityCode"/>
                    <div id="activityCode" className="form-text"></div>
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default Task;
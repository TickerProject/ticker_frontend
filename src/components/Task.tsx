import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from "./Client";
import Matter from "./Matter";
import Project from "./Project";
import {Storage} from "../persistence/Storage";
import { v4 as UUID } from 'uuid';
import { StorageData } from "../persistence/StorageData";
import _ from "lodash";

interface Task extends StorageData, Record<string, any> {
    id: string;
    name: string;
    project: Project;
    narrative: string;
    client: Client;
    matter: Matter;
    code: string;
    activityCode: string;
    time: number;
}
const storage: Storage = Storage.getInstance();
function Task(task: Task, readOnly: boolean, vertical: boolean) {
    const [formTask, setFormTask] = useState(task);

    const handleChange  = (event: { target: HTMLInputElement }): void => {
        const propName: string = event.target.id;
        const cloned = _.cloneDeep(formTask);
        if (!cloned.id) {
            cloned.id = UUID();
        }
        const {value} = event.target;
        if (propName == "project") {
            cloned.project.name = value;
        } else {
            cloned[propName] = value;
        }

        setFormTask(cloned);
    }

    const handleSaveTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        storage.saveTask(formTask);
    };

    // TODO dynamic IDs/keys
    if (vertical) {
        throw new Error("Not implemented");
    } else {
        return (
            <form onSubmit={handleSaveTask}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Task</label>
                    <input value={formTask.name} onChange={handleChange} type="text" className="form-control" id="name" aria-describedby="task"/>
                    {/*<div id="task" className="form-text"></div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Project</label>
                    <input value={formTask.project.name} onChange={handleChange} type="text" className="form-control" id="project" aria-describedby="project"/>
                    {/*<div id="project" className="form-text"></div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Client</label>
                    <input value={formTask.client.name} onChange={handleChange} type="text" className="form-control" id="client.name" aria-describedby="client"/>
                    {/*<div id="client" className="form-text"></div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Matter</label>
                    <input value={formTask.matter.name} onChange={handleChange} type="text" className="form-control" id="matter.name" aria-describedby="matter"/>
                    {/*<div id="matter" className="form-text"></div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Narrative</label>
                    <input value={formTask.narrative} onChange={handleChange} type="text" className="form-control" id="narrtive" aria-describedby="narrtive"/>
                    {/*<div id="narrtive" className="form-text"></div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Activity Code</label>
                    <input value={formTask.activityCode} onChange={handleChange} type="text" className="form-control" id="activityCode" aria-describedby="activityCode"/>
                    {/*<div id="activityCode" className="form-text"></div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Time</label>
                    <input value={formTask.time} onChange={handleChange} type="text" className="form-control" id="time" aria-describedby="time"/>
                    {/*<div id="activityCode" className="form-text"></div>*/}
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default Task;
import {Storage} from "./Storage";
import Task from "../components/Task";
import _ from 'lodash';

export class LocalStorage implements Storage {
    private static readonly TASK_PROP_NAME = "task_prop_name";
    saveItem(propertyName: string, item: any): void {
        localStorage.setItem(propertyName, item);
    }

    getItem(propertyName: string): any {
        return localStorage.getItem(propertyName);
    }

    saveTask(task: Task): void {
        const tasksRaw: any = localStorage.getItem(LocalStorage.TASK_PROP_NAME);
        let tasks;
        if (!tasksRaw) {
            tasks = [task];
        } else {
            tasks = JSON.parse(tasksRaw);
            const t = _.find(tasks, task.id);
            if (t) {
                tasks.remove(t);
            }
            tasks.push(task);
        }
        localStorage.setItem(LocalStorage.TASK_PROP_NAME, JSON.stringify(tasks));
        console.log("Logging tasks save");
        tasks.forEach((t: any) => {
           console.log("Task: \n" + JSON.stringify(t));
        });
    }

    getTask(id: string): Task {
        const tasks: any = localStorage.getItem(LocalStorage.TASK_PROP_NAME);

        return _.find(tasks, id);
    }

    getTasks(): Array<Task> {
        const tasks: any= localStorage.getItem(LocalStorage.TASK_PROP_NAME);

        return tasks;
    }
}
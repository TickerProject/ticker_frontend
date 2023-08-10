import {LocalStorage} from "./LocalStorage";
import Task from "../components/Task";

export abstract class Storage {

    private static instance: Storage;

    abstract saveItem(propertyName: string, item: any) : void;
    abstract getItem(propertyName: string): any;
    abstract saveTask(task: Task): void;
    abstract getTask(id: string): Task;
    abstract getTasks(): Array<Task>;

    static getInstance(): Storage {
        // TODO implement only for local and DB
        if (!this.instance) {
            this.instance = new LocalStorage();
        }

        return this.instance;
    }



}
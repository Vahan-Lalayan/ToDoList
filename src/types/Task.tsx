export type Task = {
    id:string;
    text:string;
    timeAdded:number;
    timeCompleted:number | null;
    done:boolean;
}
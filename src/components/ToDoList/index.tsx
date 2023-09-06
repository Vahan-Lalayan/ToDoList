import styles from './style.module.css'
import { Task } from '../../types/Task'
import ToDoForm from '../ToDoForm'
import ToDoItem from '../ToDoItem'
import React from 'react'
import MyType from '../../types/Props'

interface CurrentProps {
    tasks:Task[];
    done:number;
    onComplete:(task:Task) => void;
    onAdd:(task:Task) => void;
    onCancel:(task:Task) => void;
    onDelete:(task:Task) => void;
    onClearAll: () => void;

}

const ToDoList:React.FC<CurrentProps> = (props) => {

    const handleNewTask = ({e,text,form}:MyType):void => {
        e.preventDefault()
     

        
        let newTask = {
            id:Date.now() + "-" + Math.floor(Math.random()*1E+9),
            text:text.current?.value ?? "",
            timeAdded:Date.now(),
            timeCompleted:null,
            done:false
        }
        props.onAdd(newTask)
        form.current?.reset()
    }

    return <div className={styles.container}>
        <ToDoForm 
        handleAdd={handleNewTask} 
        handleClearAll = {props.onClearAll}/>
        <div className={styles.parent}>
            {
                props.tasks.map((value:Task) => {
                    return <ToDoItem
                        key = {value.id}
                        task = {value}
                        onComplete={props.onComplete}
                        onCancel = {props.onCancel}
                        onDelete = {props.onDelete}
                    />
                })
            }
        </div>
        {props.tasks.length > 0 && <h3>{props.done}/{props.tasks.length}</h3>}
    </div>
}

export default ToDoList
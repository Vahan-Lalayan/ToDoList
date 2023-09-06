import {Task} from "../../types/Task"
import styles from "./style.module.css"

interface CurrentProps{
    task:Task
    onComplete : (task:Task) => void
    onCancel: (task:Task) => void
    onDelete: (task:Task) => void
    
}

const ToDoItem:React.FC<CurrentProps> = (props) =>{
    const {task,onComplete,onCancel,onDelete} = props
    const st = task.done ? styles.completed : styles.task
    return <div className= {st}>
        <h3>{task.text}</h3>

        {
            !task.done
                ? <button onClick={() => onComplete(task)} >Complete</button>
                : <button onClick={() => onCancel(task)}>Cancel</button>
        }
        <button onClick={ () => onDelete(task)}>Delete</button>

    </div>

}
export default ToDoItem
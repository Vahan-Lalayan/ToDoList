import React from 'react';
import { useState,useEffect } from 'react';
import { Task } from "./types/Task"
import ToDoList from './components/ToDoList';


const App:React.FC = () =>{

  const [todos,setTodos] = useState<Task[]>([])
  const [done,setDone] = useState<number>(0)

  const addTask = (task:Task) : void => {
    setTodos([task,...todos])
  }

  const clearAllTasks = () => {
    setTodos([]); 
  };

  const completeTask = (task:Task):void => {
    task.done = true
    task.timeCompleted = Date.now()
    setTodos([...todos])
  }

  const cancelTask = (task:Task):void => {
    task.done = false
    task.timeCompleted = null
    setTodos([...todos])
  }
  const DeleteTask = (task: Task): void => {
    
        
        setTodos((prevTodos) => prevTodos.filter((t) => t.id !== task.id));

};

  
  useEffect(() => {
    setDone(todos.filter(a => a.done).length)
  },[todos])
  
  return <div>
   <h3>TO DO LIST</h3>
      <ToDoList
        tasks = {todos}
        done = {done}
        onAdd = {addTask}
        onComplete = {completeTask}
        onCancel = {cancelTask}
        onDelete = {DeleteTask}
        onClearAll = {clearAllTasks}
      
      />
    </div>

}
 

export default App;

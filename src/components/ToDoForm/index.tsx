import React,{useRef,RefObject } from "react";
import styles from "./style.module.css"
import CurrentProps from "../../types/Props";

type myprops = {
    handleAdd: (args: CurrentProps) => void;
    handleClearAll: () => void

}

const ToDoForm:React.FC<myprops> = props => {

    const text = useRef <HTMLInputElement>(null)
    const form = useRef <HTMLFormElement>(null)

    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    
    if (text.current && text.current.value.trim() === "") {
      return
    }

   
    props.handleAdd({ e, text, form });

    
    if (text.current) {
      text.current.value = "";
    }
  };

    return <form ref = {form} onSubmit={handleSubmit}>
        <input ref = {text} className={styles.control}/>
        <button>Save</button>
        <button onClick={props.handleClearAll}>Clear All</button>
    </form>
}
export default ToDoForm
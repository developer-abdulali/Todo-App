import React from "react";
import {v4 as uuidv4} from "uuid"

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange =(event)=>{
        setInput(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();
        setTodos([...todos,{id:uuidv4(),title:input, completed: false}])
        setInput("")
    }
  return (
    <form>
        <input 
            onSubmit={onFormSubmit}
            type="text"
            placeholder="Enter a Todo..."
            className="task-input"
            value={input}
            required
            onChange={onInputChange}
        />
        <input type="text" placeholder="Enter a Todo..." className="task-input" />
        <button className="button-add" type="submit">Add</button>
    </form>
  )
}

export default Form
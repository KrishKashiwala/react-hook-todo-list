import React, { useState } from 'react'
import './style.css'
import Form from './Form'
const App = () =>{
    const [todos , setTodos] = useState([]);
    const toggleComplete = (i) => setTodos(todos.map((todo , k) => k === i? {
        ...todo,complete : !todo.complete
    }
    :todo))
    return(
        <>
            <div className="App">
                <Form  onSubmit = {text =>  setTodos
                [{text , complete :false , ...todos}]}/>
            </div>
            {todos.map(({text , complete} , i) => (
                <div onClick = {() => toggleComplete(i)} style = {{
                    textDecoration : complete ? 'line-through'  : ''
                }}>{text}</div>
            ))}
            <button className = "btn btn-outline-primary" onClick = {() =>setTodos([])}>Reset</button>
        </>
    );
}
export default App;
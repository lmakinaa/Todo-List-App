import Form from "./form.js";
import List from "./list.js"
import { useState, useEffect } from "react";

export default function App(){
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos")
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    
    function addTodos(title) {
        setTodos(currentTodo => {
            return ([
                ...currentTodo,
                {id: crypto.randomUUID(), title, completed: false}
            ])
        })
    }
    function toggleTodo(id, completed){
        setTodos(currentTodo => {
            return (currentTodo.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                } else {
                    return todo;
                }
            }))
        })
    }
    function deleteTodo(id) {
        setTodos(currentTodo => {
            return (
                currentTodo.filter(todo => todo.id !== id)
            )
        })
    }
    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Todo List App</h1>
            <Form cstmOnSubmit={addTodos} />
            <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    )
}
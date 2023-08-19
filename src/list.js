import Item from "./listItem"

export default function List({todos, toggleTodo, deleteTodo}){

    return (
        <div className="container">
            <h2>Todo List</h2>
            <ul className="list-unstyled">
                {
                    todos.map(todo => {
                    return (
                    <Item key={todo.id} completed={todo.completed} title={todo.title} id={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    )})
                }
            </ul>
        </div>
    )
}
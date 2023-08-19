export default function Item({title, completed, id, toggleTodo, deleteTodo}){
    return (
        <li className="m-1">
             <label htmlFor="" className="form-check-label pe-2">
                    <input type="checkbox" checked={completed} className="form-check-input" onChange={e => toggleTodo(id, e.target.checked)} /> {title} </label>
                <button className="btn btn-outline-danger py-1" onClick={() => deleteTodo(id)} >Delete</button>
        </li>
    )
}
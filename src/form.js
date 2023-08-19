import { useState } from "react";

export default function Form({cstmOnSubmit}){
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        if (newItem === "") return
        cstmOnSubmit(newItem);
        setNewItem("");
    }
    return (
        <div className="container py-2">
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="form-floating my-2">
                <input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="tt" type="text" id="nn" className="form-control input-sm" />
                    <label htmlFor="nn" className="form-label">Todo Item</label>
                </div>
                <button className="btn btn-primary" style={{width:"100%"}}>Add</button>
            </form>
        </div>
    )
}
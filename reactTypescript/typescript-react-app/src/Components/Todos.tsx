import React, { useState } from 'react';
import Header from './Header';
import Buttons from './Buttons';
interface TodosType {
    id: Number,
    title: String,
    status: Boolean
}
function Todos() {
    const [todos, setTodos] = useState<TodosType[]>([]);
    const handleAddTodos = (title: string) => {
        let payload = {
            id: todos.length + 1,
            title,
            status: false,
        }
        setTodos([...todos, payload]);
    }
    return (
        <div>
            <Header counterTitle={'Hi This is todo app'} />
            <Buttons name='Add' counter={handleAddTodos} />
        </div>
    );
}

export default Todos;
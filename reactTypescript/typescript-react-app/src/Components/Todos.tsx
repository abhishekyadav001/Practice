import React, { useEffect, useState } from 'react';
import axios from "axios"
import Header from './Header';
import Buttons from './Buttons';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { log } from 'console';
export interface TodosType {
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
        // console.log(payload)
        axios.post("http://localhost:8080/todos", payload).then(({ data }) => {
            console.log(data);

            setTodos(data);
        }).catch((e) => {
            console.log(e);
        })
    }
    const getTodos = async () => {
        let { data } = await axios.get("http://localhost:8080/todos");
        setTodos(data);
    }
    useEffect(() => {
        getTodos();
    }, [todos]);
    return (
        <div>
            <Header counterTitle={'Hi This is todo app'} />
            <TodoInput handleclick={handleAddTodos} />
            {
                todos.length > 0 && todos.map((el, i) => {
                    return <TodoItems key={1 + i} {...el} />
                })
            }
        </div>
    );
}

export default Todos;
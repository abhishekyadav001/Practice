import React, { useState } from 'react';
import Buttons from './Buttons';
import { log } from 'console';
interface TodoInputProps {
    handleclick: (value: string) => void;

}
function TodoInput({ handleclick }: TodoInputProps) {
    const [currentTodo, setCurrentTodo] = useState('')
    const inputchangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setCurrentTodo(e.target.value);
    }
    const clickHandler = () => {
        if (currentTodo !== "") {
            handleclick(currentTodo)
        }
    }
    return (
        <div className='todo-input'>
            <input className='input' type="text" value={currentTodo} onChange={inputchangeHandler} />
            <Buttons name="add" counter={clickHandler} />
        </div>
    );
}

export default TodoInput;
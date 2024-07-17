import React from 'react';
import { TodosType } from './Todos';

function TodoItems({ id, title, status }: TodosType) {
    return (
        <div className='todo-items'>
            <h3 className='item-details'>{`${id} - ${title} - ${status} `}</h3>
        </div>
    );
}

export default TodoItems;
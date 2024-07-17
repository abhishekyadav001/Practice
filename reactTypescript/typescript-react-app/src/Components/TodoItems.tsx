import React from 'react';
import { TodosType } from './Todos';

function TodoItems({ id, title, status }: TodosType) {
    return (
        <div>
            <h3>{`${id} - ${title} - ${status} `}</h3>
        </div>
    );
}

export default TodoItems;
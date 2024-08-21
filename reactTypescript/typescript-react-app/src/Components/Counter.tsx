import React, { useState } from 'react';
import Header from './Header';
import Buttons from './Buttons';

function Counter() {
    const [count, setCount] = useState(1);
    const handleClick = (value: number) => {
        setCount(count + value);
    }
    return (
        <div>
            <Header counterTitle={'CounterApp'} />
            <Header counterTitle={count} >
                <h1>Hello Beta</h1>
                <h1>Hello Beta</h1>
                <h1>Hello Beta</h1>
            </Header>

            <Buttons name="Increment" counter={() => handleClick(1)} />
            <Buttons name="Decrement" counter={() => handleClick(-1)} />
        </div>
    );
}

export default Counter;
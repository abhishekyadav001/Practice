import React from 'react';

interface ButtonsProps{
    name:string,
    counter:()=>void
}
function Buttons(props:ButtonsProps) {
    let {name,counter}=props;
    return (
        <div>
            <button onClick={counter}>{name}</button>
        </div>
    );
}

export default Buttons;
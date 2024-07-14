import React from 'react';
interface HeaderParams{
    counterTitle?:number|string,
}
function Header({counterTitle}:HeaderParams) {
    return (
        <>
            <h1>{counterTitle}</h1>
        </>
    );
}

export default Header;
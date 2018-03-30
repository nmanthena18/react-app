import React from 'react';

const Cockpit = (props) =>{
    return (
        <div>
            <h1> Hey I'am a React App</h1>
            <button onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
}

export default Cockpit;
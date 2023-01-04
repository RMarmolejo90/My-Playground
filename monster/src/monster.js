import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';


const myName = ["alice", "bob", "charlie", "danielle"]


function Monster(props){

    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    const eventHandler = (event) => {
        setText(event.target.value);
    }

    const countHandler = (event) => {
        setCount(count + 6);
    }
    

    return(
        <div>
            <input type="text"
            placeholder="write stuff" onChange={eventHandler} />           
            <p>{text}</p>

            <button onClick={countHandler}>Press Me</button>
            <p>{count}</p>
        </div>
    );
}

export default Monster ;
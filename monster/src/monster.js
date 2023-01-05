import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';


const myName = ["alice", "bob", "charlie", "danielle"]


function Monster(props){

useEffect(() => {
    setCount (count + 2);
}, []);
const [count, setCount] = useState(0);
const countHandler = (event)=>{
    setCount(count - 50000);
}
const [text, setText] = useState("here");
const eventHandler = (event) => 
    { (setCount % setCount === 0) ? setText("Good") : setText(event.target.value);
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
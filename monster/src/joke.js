import React from "react";
import { ReactDOM } from "react";

export default Joke

function Joke(props){
    return(
        <div>
            {<h1>Setup: {props.setup}</h1>}
            {<h1>Punchline: {props.punchline}</h1>}
        </div>
    );
}
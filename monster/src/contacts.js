import React from "react";
import { ReactDOM } from "react";

export default Contacts

function Contacts(props){
    return(
        <div className="contacts">
            {props.name && <h1>Hi Im {props.name}</h1>}
            {props.phone && <p>Call Me At {props.phone}</p>}
            {props.email}
        </div>
    )
}
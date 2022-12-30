import React from "react";
import { ReactDOM } from "react";

export default Contacts

function Contacts({name, phone}){
    return(
        <div className="contacts">
            <h1>{name}</h1>
            <p>{phone}</p>
        </div>
    )
}
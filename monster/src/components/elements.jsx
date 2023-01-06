import React from 'react';


function ItemText(props) {
    return(    
        <div className='center'>
            <h1>
                {props.model}
            </h1>   
            <p>
                {props.description}
            </p>
        </div>
    );
}



export default ItemText;
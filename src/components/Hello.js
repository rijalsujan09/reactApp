import React from 'react';

const Hello = (props) => {
   
    console.log(props)
    
    return(
        <div>
            <h1>Namestey {props.name} </h1>
            {props.children}
        </div>
    )
}
export default Hello ;
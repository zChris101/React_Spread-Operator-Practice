import React, { useState } from 'react';

const Tolist = (props) => {

    return (
        <div onClick={()=>{props.onChecked(props.id)}}>
            <li>{props.text}</li>
        </div>
    )
}

export default Tolist
import React from 'react';

const Label = (props) =>{
    return (
        <div>
            <h1 data-testid="label">{props.name}</h1>
        </div>
    )
}

export default Label;
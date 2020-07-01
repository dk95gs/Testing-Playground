import React from 'react';
import { render } from '@testing-library/react';

const Button = (props) =>{
    const styles = {
        width:"20rem",
        height:"4rem",
        fontSize:"2rem",
        backgroundColor:"blue",
        opacity: ".7",
        borderRadius:"25px",
        outline:"none",
        boxShadow:"none"
    }
    console.log(props.DT);
    return(
        <div>
            <button data-testid="button" onClick={()=>{props.setDT(props.DT * 2)}} style={styles}>{props.name}</button>
        </div>
    )
}

export default Button;
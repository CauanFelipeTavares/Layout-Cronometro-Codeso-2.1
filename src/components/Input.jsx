import React from "react"

function Input(props){

    return(
        <>
            <label>{props.Label}</label>
            <input type="number" value={props.InputValue}></input>
        </>
    )
}

export default Input
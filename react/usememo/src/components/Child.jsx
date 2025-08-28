import React from 'react'

export const Child = (props) => {
        console.log("rerendered")
        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }

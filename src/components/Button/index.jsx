import React from 'react'

import './styles.css'

export default function Button({ counter, onClick, children}){

    function showCounter(){
        if(typeof counter !== 'number'){
            return null
        }
        
        return (
            <span className="button__badge" >
                <span>{counter}</span>
            </span>
        )
    }

    
    return (
        <button className="button" onClick={onClick}>
            {children && children}
            {showCounter()}
        </button>
    )
}
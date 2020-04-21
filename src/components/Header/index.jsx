import React from 'react'

import BagButton from '../BagButton'
 
import './styles.css'


export default function header({title}){
    return(
        <header className="header" >
            <h1 className="header__title">{title}</h1>
            <BagButton amount={2}/>
        </header>
    )
}
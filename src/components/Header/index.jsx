import React from 'react'

import './styles.css'


export default function header({title}){
    return(
        <header className="header" >
            <h1 className="header__title">{title}</h1>
        </header>
    )
}
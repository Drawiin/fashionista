import React from 'react'
import { FiShoppingBag, FiSearch } from 'react-icons/fi'
 
import './styles.css'

import Button from '../Button'


export default function header({title, counter}){
    return(
        <header className="header" >
            <h1 className="header__title">{title}</h1>
            <div>
                <Button>
                    <FiSearch size={28}/>
                </Button>
                
                <Button counter={counter} >
                    <FiShoppingBag size={28}/>
                </Button>

            </div>
        </header>
    )
}
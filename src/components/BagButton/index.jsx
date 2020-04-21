import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'

import './styles.css'

export default function bagButton({ amount }){

    return (
        <button>
            <FiShoppingBag size={28}/>
            <span>{amount}</span>
        </button>
    )
}
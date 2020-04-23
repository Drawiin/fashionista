import React from 'react'

import './styles.css'

import Product from '../Product'

export default function ProductList(){
    const products = [1, 2, 3, 5, 6, 7, 8, 9, 10]

    return (
        <ul className="products">
            {products.map( e => (<Product key={e}/>))}
        </ul>
    )
}
import React, { useEffect, useState } from 'react'

import './styles.css'

import Product from '../Product'

export default function ProductList(){
    const [products, setProducts] = useState([])

    useEffect(() => {loadProducts()}, [products])

    async function loadProducts(){
        const response = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        const data = await response.json()
        setProducts(data)
    }
    return (
        <ul className="products">
            {products.map( ({ sizes: [{sku}], ...rest}) => (<Product key={sku} {...rest} />))}
        </ul>
    )
}
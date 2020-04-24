import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import './styles.css'

import Header from '../../components/Header'
import Catalog from '../../components/Catalog'

export default function Home(){
    const [products, setProducts] = useState([])

    async function loadProducts(){
        try {
            const response = await api.get('catalog')
            const data = response.data
            setProducts(data)
        } catch (error) {
            alert(`Não foi possivel carregar os produtos \n ${error}`)
        }
    }

    useEffect(() => {loadProducts()}, [products])
    
    return (
        <div>
            <Header title="Fashionista" counter={10} />
            <Catalog products={products}/>
        </div>
    )
}
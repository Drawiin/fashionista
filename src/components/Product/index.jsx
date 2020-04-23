import React from 'react'

import './styles.css'

import placeHolder from '../../assets/images/placeholder.jpg'

export default function Product(){

    return(
        <li className="product">
            <span className="product__sale">
                <span>20%</span>
            </span>
            <figure className="product__img">
                <img src={placeHolder} alt="clothes"/>
            </figure>
            <div className="product__description">
                <p className="product__name">Camisa Polo</p>
                
                <p className="product__price">
                    <span className="product__oldPrice">R$100,00</span>
                    <span className="product__newPrice">R$80,00</span>
                </p>
            </div>
        </li>
    )
}
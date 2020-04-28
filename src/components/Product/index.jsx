import React from 'react'

import './styles.css'



export default function Product({ 
        name, 
        on_sale: onSale,
        discount_percentage: discountPercentage,
        regular_price: regularPrice,
        actual_price: actualPrice
    }){
    const image = 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'

    function showDiscountPercentage(){
        if (onSale) {
            return (
                <span className="product__sale">
                    <span>{discountPercentage}</span>
                </span>
            )
        }
        return null
    }

    function showRegularPrice(){
        if(onSale){
            return (
                <span className="product__regularPrice">{regularPrice}</span>
            )
        }
        return null
    }

    return(
        <li className="product">
            {showDiscountPercentage()}
            <figure className="product__img">
                <img src={image} alt="clothes"/>
            </figure>
            <div className="product__description">
                <p className="product__name">{name}</p>
                
                <p className="product__price">
                    {showRegularPrice()}
                    <span className="product__actualPrice">{actualPrice}</span>
                </p>
            </div>
        </li>
    )
}
import React from 'react'

import './styles.css'



export default function Product({ 
        name, 
        on_sale: onSale,
        discount_percentage: discountPercentage,
        regular_price: regularPrice,
        actual_price: actualPrice
    }){
    const image = 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912'

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

    function showOldPrice(){
        if(onSale){
            return (
                <span className="product__oldPrice">{regularPrice}</span>
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
                    {showOldPrice()}
                    <span className="product__newPrice">{actualPrice}</span>
                </p>
            </div>
        </li>
    )
}
import React from 'react'

import './styles.css'

export default function ProductInfo(){
    const image = 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578'

    return(
        <div className="productInfo">
            <div className="productInfo__container">
                    <figure className="productInfo__img">
                        <img src={image} alt="REGATA ALCINHA FOLK"/>
                    </figure>

                    <div className="productInfo__description">
                        <h2 className="productInfo__name">REGATA ALCINHA FOLK</h2>

                        <p className="paymentOptions">
                            <span className="paymentOptions__fullPrice">R$10,00</span>   
                            <span className="paymentOptions__installments">3X de R$3,99</span>
                        </p>

                        <h3 className="productInfo__sizes">Escolha um tamanho</h3>
                        <ul className="sizeSelection">
                            
                            <li className="size">
                                <button>P</button>
                            </li>

                            <li className="size">
                                <button>M</button>
                            </li>

                            <li className="size size--selected">
                                <button>G</button>
                            </li>

                            <li className="size">
                                <button>GG</button>
                            </li>

                        </ul>
                        <div  className="product__addButton">
                            <button>Adicionar a Sacola</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
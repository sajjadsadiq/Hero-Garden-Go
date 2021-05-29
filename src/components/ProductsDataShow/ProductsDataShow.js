import React from 'react'
import './ProductsDataShow.css'

const ProductsDataShow = ({ products }) => {
    return (
        <div>
            <div className="card">
                <div className="box">
                    <div className="content">
                        <div className="cardImg">
                            <img className="img" src={products.img} alt="" />
                        </div>
                        <div className="description">
                            <h4 className="mt-3 mb-2">{products.title}</h4>
                            <a className="cardPrice" href="">$ {products.price}</a>
                            <button className="btn btn-primary ml-4">{products.card}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDataShow

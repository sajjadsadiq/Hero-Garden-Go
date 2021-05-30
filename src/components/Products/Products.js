import React from 'react'
import ProductsDataShow from '../ProductsDataShow/ProductsDataShow'
import './Products.css'
import FakeData from '../../FakeData/FakeData.json'
import { useSelector } from 'react-redux'


const Products = () => { 
    const productsData=useSelector((state)=>{
        return state.product.product
    })
    return (
        <div className="produtsContainer">
            <div className="produtsTitle">
                <h1 className=" mt-5">Our Produts</h1>
                <p className="">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada consectetuer.</p>
            </div>
            <div className="container">
                {
                    productsData.map(products => <ProductsDataShow products ={products}/>)
                }
                
            </div>
        
        </div>
    )
}

export default Products

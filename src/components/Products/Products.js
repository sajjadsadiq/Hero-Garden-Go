import React from 'react'
import { useSelector } from 'react-redux'
import ProductsDataShow from '../ProductsDataShow/ProductsDataShow'
import './Products.css'
// import productsData from '../fakeData/fakeData.json'

const Products = () => {
    const productsData = useSelector((state) => {
        return state.trees.treesList;
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

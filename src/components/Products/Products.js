import React from 'react'
import ProductsDataShow from '../ProductsDataShow/ProductsDataShow'
import './Products.css'

const productsData = [
    {
        id: 1,
        title: 'Strive Shoulder Pack1',
        price: 23,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/5YYQD4r/one.jpg'
    },
    {
        id: 2,
        title: 'MH02-Gray',
        price: 41,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/HqR9yJ1/two.jpg'
    },
    {
        id: 3,
        title: 'Strive Shoulder Pack',
        price: 49,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/D8fQtS4/three.jpg'
    },
    {
        id: 4,
        title: 'Rival Field Messenger',
        price: 32,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/0VhcPgT/four.jpg'
    },
    {
        id: 5,
        title: 'Jacaranda ',
        price: 43,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/K2hCDM9/five.jpg'
    },
    {
        id: 6,
        title: 'Wayfarer',
        price: 56,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/mGL8BhT/six.jpg'
    }

]
const Products = () => {
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

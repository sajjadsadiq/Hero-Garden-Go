import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IdContext } from '../../App'
import './ProductsDataShow.css'

const ProductsDataShow = ({ products }) => {
    const [id,setId] = useContext(IdContext)
    const handleSetId=(id)=>{
        setId(id)
    }
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
                            <a className="cardPrice" to="">$ {products.price}</a>
                            <Link to='/product' onClick={()=>handleSetId(products.id)} className="btn btn-primary ml-4">{products.card}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDataShow

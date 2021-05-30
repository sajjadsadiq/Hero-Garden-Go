import React, { useContext } from 'react';
import './Product.css'
import { IdContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Actions/Action';

const Product = () => {
    const [id,setId] = useContext(IdContext)
    const productsData=useSelector((state)=>{
        return state.product.product
    })
    const product = productsData.find(pr=>pr.id===id)
    const dispatch =useDispatch()
    return (
     
    <div className=" container mx-auto">
                         <div className='row container '>
            <div className='col-md-12 text-center' style={{}}>
                <div >
                <img src={product.img} />
                </div>
            </div>
            <div className='col-md-12'>
                <h2 style={{textAlign: 'center',marginTop:'25px'}}>{product.title}</h2>
             <div className=' text-justify d-flex align-items-center justify-content-center'>
             <p className='des'>
                    {product.description}
                </p>
             </div>
               <div className='d-flex align-items-center justify-content-center'>
               <h3>
                   ${product.price}
                </h3>
                <button className="btn btn-primary ml-4" onClick={()=>dispatch(addToCart(product))}>
                    Buy Now
                </button>
               </div>

                </div>
        </div>
    </div>
     
    );
};

export default Product;
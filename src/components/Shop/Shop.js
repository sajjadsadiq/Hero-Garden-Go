import React from 'react';
import { useSelector } from 'react-redux';

const Shop = () => {
    const product=useSelector((state)=>{
        return state.product.addingCart
    })
    return (
        <div>
            {
                product.map(pr=><div className="d-flex">

                    <img src={pr.img} /> <h1 className="m-auto">{pr.title}</h1>
                </div>)
            }

        </div>
    );
};

export default Shop;
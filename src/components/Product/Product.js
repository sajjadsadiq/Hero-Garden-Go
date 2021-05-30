import React, { useContext } from 'react';
import './Product.css'
import { IdContext } from '../../App';
const productsData = [
    {
        id: 1,
        title: 'Strive Shoulder Pack1',
        price: 23,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/5YYQD4r/one.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum vehicula ante sit amet malesuada. Aenean quis pulvinar sapien, nec sollicitudin eros. Aenean interdum nunc non nulla aliquam vehicula. Quisque maximus luctus nibh, non posuere tellus. Etiam ultricies dapibus mauris, et condimentum ante faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus cursus, nisl eget fermentum auctor, sapien nisl vehicula turpis, id consequat augue tellus id nisl. Vivamus nulla diam, placerat ut elit a, elementum faucibus purus."
    },
    {
        id: 2,
        title: 'MH02-Gray',
        price: 41,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/HqR9yJ1/two.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum vehicula ante sit amet malesuada. Aenean quis pulvinar sapien, nec sollicitudin eros. Aenean interdum nunc non nulla aliquam vehicula. Quisque maximus luctus nibh, non posuere tellus. Etiam ultricies dapibus mauris, et condimentum ante faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus cursus, nisl eget fermentum auctor, sapien nisl vehicula turpis, id consequat augue tellus id nisl. Vivamus nulla diam, placerat ut elit a, elementum faucibus purus."
    },
    {
        id: 3,
        title: 'Strive Shoulder Pack',
        price: 49,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/D8fQtS4/three.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum vehicula ante sit amet malesuada. Aenean quis pulvinar sapien, nec sollicitudin eros. Aenean interdum nunc non nulla aliquam vehicula. Quisque maximus luctus nibh, non posuere tellus. Etiam ultricies dapibus mauris, et condimentum ante faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus cursus, nisl eget fermentum auctor, sapien nisl vehicula turpis, id consequat augue tellus id nisl. Vivamus nulla diam, placerat ut elit a, elementum faucibus purus."
    },
    {
        id: 4,
        title: 'Rival Field Messenger',
        price: 32,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/0VhcPgT/four.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum vehicula ante sit amet malesuada. Aenean quis pulvinar sapien, nec sollicitudin eros. Aenean interdum nunc non nulla aliquam vehicula. Quisque maximus luctus nibh, non posuere tellus. Etiam ultricies dapibus mauris, et condimentum ante faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus cursus, nisl eget fermentum auctor, sapien nisl vehicula turpis, id consequat augue tellus id nisl. Vivamus nulla diam, placerat ut elit a, elementum faucibus purus."
    },
    {
        id: 5,
        title: 'Jacaranda ',
        price: 43,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/K2hCDM9/five.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum vehicula ante sit amet malesuada. Aenean quis pulvinar sapien, nec sollicitudin eros. Aenean interdum nunc non nulla aliquam vehicula. Quisque maximus luctus nibh, non posuere tellus. Etiam ultricies dapibus mauris, et condimentum ante faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus cursus, nisl eget fermentum auctor, sapien nisl vehicula turpis, id consequat augue tellus id nisl. Vivamus nulla diam, placerat ut elit a, elementum faucibus purus."
    },
    {
        id: 6,
        title: 'Wayfarer',
        price: 56,
        card: 'ADD TO CARD',
        img: 'https://i.ibb.co/mGL8BhT/six.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum vehicula ante sit amet malesuada. Aenean quis pulvinar sapien, nec sollicitudin eros. Aenean interdum nunc non nulla aliquam vehicula. Quisque maximus luctus nibh, non posuere tellus. Etiam ultricies dapibus mauris, et condimentum ante faucibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus cursus, nisl eget fermentum auctor, sapien nisl vehicula turpis, id consequat augue tellus id nisl. Vivamus nulla diam, placerat ut elit a, elementum faucibus purus."
    }

]
const Product = () => {
    const [id,setId] = useContext(IdContext)
    const product = productsData.find(pr=>pr.id===id)
    console.log(product)
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
                <button className="btn btn-primary ml-4">
                    Buy Now
                </button>
               </div>

                </div>
        </div>
    </div>
     
    );
};

export default Product;
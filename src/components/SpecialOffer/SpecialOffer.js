import React from 'react'
import './SpecialOffer.css'

const SpecialOffer = () => {
    return (
        <div className="container">
            <div className='offerTitle'>
                <h1>SPECIAL OFFER</h1>
            </div>
            <div class="row mt-5">
                <div className="col-md-5 mt-5">
                    <p>SUCCULENT GARDEN</p>
                    <h1>BOX WOGON</h1>
                    <p>From planter materials to style options, discover which planter is best for your space.</p>
                    <button class="btn btn-outline-primary">Expoler The Shop</button>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid" src="https://i.ibb.co/mtDhHc2/Banner.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer

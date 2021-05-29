import React from 'react'

import './DeliveryInfo.css'
import { GrDeliver,GrServices } from 'react-icons/gr';
import { MdPayment } from 'react-icons/md';



const DeliveryInfo = () => {
    return (
        <>
            <div className="container">
                <div className="deliveryTitle mb-5">
                    <h1>Free Delivery</h1>
                </div>
                <div className="deliveryInfo">
                    <div className="deliveryCard">
                        <div className="content">
                            <GrDeliver className='icons'/>
                            <h4 className="" >FREE DELIVERY</h4>
                            <p >free shipping around the world for all orders over $120</p>
                        </div>
                    </div>

                    <div className="deliveryCard">
                        <div className="content">
                            <MdPayment className='icons'/>
                        <h4>SAFE PAYMENT</h4>
                        <p>With our payment gateway, don't worry about your information</p>
                        </div>
                    </div>

                    <div className="deliveryCard">
                        <div className="content">
                        <GrServices className='icons'/>
                        <h4>FRIENDLY SERVICES</h4>
                        <p>You have 30-day return guarantee for every single order</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default DeliveryInfo

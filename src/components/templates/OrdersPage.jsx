import React from 'react'

import Card from '../molecules/Card';
import orderPage from '../../styles/orderPage.css'

function OrdersPage({ data }) {

    const Cards = data.map((item) => {
        return <Card key={item.id} data={item} />;
    });
    
    
    
    return (
        < div className="userDetails" >
            <div>
                
                <div className='cardDetails'>{Cards}</div>
            </div>
            
           
        </div >


    )
}

export default OrdersPage


    
import React from 'react'

import Card from '../molecules/Card';

 
function OrdersPage({ data }) {

    const Cards = data.map((item) => {
        return <Card key={item.id} data={item} />;
    });
    
    
    
    return (
        
        <div className='cardDetails'>{Cards}</div>

    )
}

export default OrdersPage


    
import React from 'react'

import Card from '../molecules/Card';

function OrdersPage({ data }) {

    const Cards = data.map((item) => {
        return <Card key={item.id} data={item} />;
    });
    
    
    
    return (
        < div className="userDetails" >
            <div>
                <h1>order page</h1>
                <div>{Cards}</div>
            </div>
            
           
        </div >


    )
}

export default OrdersPage


    
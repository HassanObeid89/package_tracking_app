import React from 'react'

function Card( {data} ) {
    const {
        eta,
        id,
        last_updated,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_id,
        location_name,
        location_status_ok,
        notes,
        parcel_id,
        sender,
        status,
        user_name,
        user_phone,
        verification_required,
    }=data;

    return (
        <div>
            
            <div>
                <h1></h1> 
                <h1>{eta}</h1>
                <hr/>
                <h4>{id}</h4>
                <h4>  </h4>

            </div>

        </div>
    )
}

export default Card

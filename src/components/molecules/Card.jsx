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
                
                <p>{eta}</p>
                <hr/>
                <p>{id}</p>
               

            </div>

        </div>
    )
}

export default Card

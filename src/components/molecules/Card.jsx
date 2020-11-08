import React from 'react'

import { BiPackage } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { FcViewDetails } from "react-icons/fc";

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
            
             <article > 
            
            <div className = 'inline'>
                <p><BiPackage /> Packege-ID: {parcel_id} </p>
                <p><GrLocation /> Delivery place: {location_name} </p>
                <p><FaRegBuilding /> From: {sender} </p>
                <p><GrStatusUnknown /> Status: {status} </p>
                <p><FcViewDetails /> Details: {notes} </p>
            </div>
                
            </article>
             

        
    )
}

export default Card

import React from 'react'

import { BiPackage } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { FcViewDetails } from "react-icons/fc";


function Card( {data} ) {
    const {
        
        location_name,
        notes,
        parcel_id,
        sender,
        status,
       
    }=data;

    return (
            
             <article className="cards" > 
            
            <div className = 'inline'>
                <p><BiPackage /> Packege-ID: {parcel_id} </p>
                <p><GrLocation /> Delivery place: {location_name} </p>
                {/* <p><FaRegBuilding /> From: {sender} </p>
                <p><GrStatusUnknown /> Status: {status} </p> */}
                <p><FcViewDetails /> Details: {notes} </p>
            </div>
                
            </article>
            
             

        
    )
}

export default Card

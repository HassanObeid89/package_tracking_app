//React core
import React, { useEffect, useState } from 'react';



import Header from './components/organisms/Header';
import OrdersPage from './components/templates/OrdersPage';
import Footer from './components/organisms/Footer';
import Map from './components/molecules/Map';
import './styles/style.css';


import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./skateboard-parks.json";




function App() {

  // const [packageDetail, setpackageDetail] = useState([]);
  // const [status, setStatus] = useState(0);
  // const endPoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(endPoint, {mode: "cors"});
  //       const data = await response.json();
  //       setpackageDetail(data);
  //       setStatus(1);
  //     }
  
    
  //   catch {
  //     setStatus(2)
  //   };
  // }
  // getData();

  // },[]);
  
  


    return(
      
    
    <div className = 'App'>

    <div className = 'wrapper'>

       
              {/* Header */}

        {/* {status === 1 ? <Header data={packageDetail[0]} /> : null} */}

          <Map center={[45.4, -75.7]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>

        {/* Orders page */}
      
      
        {/* {status === 1 ? <OrdersPage data={packageDetail} /> :null} */}


        {/* {status === 2 ? <p>Data not found</p> : null} */}
     
      {/* Footer */}

        {/* {status === 1 ? <Footer /> : null} */}
        
       </div>

    // </div>
  
  );
}




export default App;

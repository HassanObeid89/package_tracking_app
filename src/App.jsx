//React core
import React, { useEffect, useState } from 'react';


// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/organisms/Header';
import OrdersPage from './components/templates/OrdersPage';



function App() {

  const [packageDetail, setpackageDetail] = useState([]);
  const [status, setStatus] = useState(0);
  const endPoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endPoint, {mode: "cors"});
        const data = await response.json();
        setpackageDetail(data);
        setStatus(1);
      }
  
    
    catch {
      setStatus(2)
    };
  }
  getData();

  },[]);
  
  


    return(

    // showing the pages
    <div>

      <div>
      {/* Header */}

        {status === 1 ? <Header data={packageDetail[0]} /> : null}

      </div>
        {/* Orders page */}
      
      <div className = 'order'>
        {status === 1 ? <OrdersPage data={packageDetail} /> :null}


        {status === 2 ? <p>Data not found</p> : null}
      </div>
      
      
    </div>

  );
}

export default App;

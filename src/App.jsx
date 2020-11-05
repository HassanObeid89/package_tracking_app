//React core
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/organisms/Header';
import OrdersPage from './components/templates/OrdersPage';

function App() {

  const [packageDetail, setpackageDetail] = useState([])

  useEffect(() => {
    axios
    .get('https://my.api.mockaroo.com/orders.json?key=e49e6840')
    .then(response => {
      console.log(response)
      setpackageDetail(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])
  
  


    return(

    // showing the pages
    <div className="App">
      {/* Header */}
      <Header />

        {/* Orders Cards */}
      
      <div>
        <OrdersPage data={packageDetail} />
      </div>

      
      
    </div>

  );
}

export default App;

// App.js
import React from 'react';
//import ReactDOM from 'react-dom';
import ServiceTable from './components/ServiceTable';
import services from './components/servicesData';
//import ConductorsTable from './components/ConductorsTable'
//import Calendar from './components/Calendar';
//import Service from './components/Service';
//import OfficiatorsTable from './components/OfficiatorsTable'
//import Officiator from './components/Officiator';

//import CheckoutForm from './components/CheckoutForm';
//import SuccessComponent from './components/SuccessComponent';

function App() {
  // Check if the URL contains "success" to determine which component to render
  // const isSuccessPage = window.location.pathname.includes('success');

  // return (
  //   <div className="App">
  //     {isSuccessPage ? <SuccessComponent /> : <CheckoutForm />}
  //   </div>
  // );

  return (
    <div>
      <h1>Service Table</h1>
      <ServiceTable services={services} />
      {/* <Service/> */}
      {/* <OfficiatorsTable/> */}
      {/* <ConductorsTable/> */}
    </div>
  );
};

export default App;

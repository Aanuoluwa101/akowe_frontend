import React from 'react';
import ServiceTable from './components/ServiceTable';
import services from './components/servicesData';
import './App.css'
import Home from './components/Home';
import Intro from './components/intro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        {/* <Route path='/intro' Component={Intro}/> */}
      </Routes>
    </Router>
    // <div>
    //   <h1 className='header'>Service Table</h1>
    //   <ServiceTable services={services} />
    // </div>
  );
};

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
//import { Router } from 'express';

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="App">
      <Route exact path= "/" component={Landing} /> 
      <Route exact path="/register" component={Register} />
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
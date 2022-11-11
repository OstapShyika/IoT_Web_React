import React from 'react';
import './App.css';
import Header from './components/Header/header.jsx'
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Catalog from './components/Catalog/catalog';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

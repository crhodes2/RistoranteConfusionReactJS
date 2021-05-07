import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import './App.css';
import Menu from './components/MenuComponent';


function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            <h4 className="navi"> <RestaurantIcon/> Ristorante Confusion</h4>
          </NavbarBrand>
          <Menu />
        </div>
      </Navbar>
    </div>
  );
}

export default App;

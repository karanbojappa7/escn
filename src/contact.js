import React from 'react';
import logo from './WhatsApp.png';
import './App.css';

function contact() {
  return (
    <div>
        <h1>Contact Page</h1>
      <p>Phone Number:+91 4204208404</p>
      <p>Email: nit19hin055@gmail.com</p>
    <a href="https://wa.me/9108962899" target="_blank"><img className="wha" src={logo}/></a> 
    </div>
    );
}
export default contact;
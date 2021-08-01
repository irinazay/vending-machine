import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import vendingMachineImg from './VendingMachine.png';

function VendingMachine() {
  return (
    <div
      className="vending-machine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}
    >
      <div class="home-message">
        <p>hello i am a vending machine. what would you like to eat?</p>
      </div>
      <div className="home-page-links">
        <h1>
          <Link exact to="/soda">
            Soda
          </Link>
        </h1>
        <h1>
          <Link exact to="/chips">
            Chips
          </Link>
        </h1>
        <h1>
          <Link exact to="/sardines">
            Fresh Sardines
          </Link>
        </h1>
      </div>
    </div>
  );
}
export default VendingMachine;

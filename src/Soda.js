import React from 'react';
import { Link } from 'react-router-dom';
import './Soda.css';
import sodaImg from './Soda.png';

function Soda() {
  return (
    <div className="Soda">
      <img src={sodaImg} alt="coca cola can" />
      <div className="soda-message">
        <h1>OMG SUGARRRRR</h1>
        <h1>
          <Link to="/">Go Back</Link>
        </h1>
      </div>

      <img src={sodaImg} alt="coca cola can" />
    </div>
  );
}

export default Soda;

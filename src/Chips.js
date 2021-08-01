import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chipsImg from './Chips.png';
import './Chips.css';

function Chips() {
  const [bags, setBags] = useState([]);
  function handleClick() {
    setBags((data) => [...bags, 1]);
  }

  const bag = bags.map((bag, i) => (
    <img key={i} src={chipsImg} alt="chips" width="100px" />
  ));

  return (
    <div className="Chips">
      <div className="chips-bags"> {bag}</div>

      <div className="chips-message">
        <h1>BAGS EATEN: {bags.length}</h1>
        <button onClick={handleClick}>NOM NOM NOM</button>
        <h1>
          <Link to="/">Go Back</Link>
        </h1>
      </div>
    </div>
  );
}

export default Chips;

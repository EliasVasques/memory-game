import React from "react";

import './Card.css'

const Card = ( {src, onClick, id} ) => {
  return <> 

    <img src={src} alt="card" className="card" onClick={() => onClick(id)} />
  </>;
};

export default Card;

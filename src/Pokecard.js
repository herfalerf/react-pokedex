import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, img, type, base_experience }) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img className="Pokecard-img" src={img} alt="" />
      <div className="Pokecard-stats">Type: {type}</div>
      <div className="Pokecard-stats">EXP: {base_experience}</div>
    </div>
  );
};

export default Pokecard;

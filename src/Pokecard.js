import React from "react";
import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = ({ name, id, type, base_experience }) => {
	let img = `${BASE_URL}${id}.png`;

	return (
		<div className="Pokecard">
			<p className="Pokecard-name">
				<b>{name}</b>
			</p>
			<img className="Pokecard-img" src={img} alt="" />
			<p className="Pokecard-type">Type: {type}</p>
			<p className="Pokecard-exp">EXP: {base_experience}</p>
		</div>
	);
};

export default Pokecard;

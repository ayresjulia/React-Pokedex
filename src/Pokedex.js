import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
import _ from "lodash";

const Pokedex = ({ pokemons }) => {
	let shuffled = _.shuffle(pokemons);
	let leftHand = shuffled.slice(0, 4);
	let rightHand = shuffled.slice(4, 8);

	const totalL = leftHand.reduce((acc, i) => {
		return acc + i.base_experience;
	}, 0);

	const totalR = rightHand.reduce((acc, i) => {
		return acc + i.base_experience;
	}, 0);

	let winnerMsg;
	totalR > totalL ? (winnerMsg = "Player2 won!") : (winnerMsg = "Player1 won!");

	return (
		<div>
			<h1 className="Pokedex-header">{winnerMsg}</h1>

			<div className="container">
				<div className="Pokedex">
					<h2 className="Pokedex-header">Player 1</h2>
					<div className="Pokedex-card">
						{leftHand.map((p) => (
							<Pokecard
								key={p.id}
								id={p.id}
								name={p.name}
								type={p.type}
								base_experience={p.base_experience}
							/>
						))}
					</div>
					<h2 className="Pokedex-total">Total Experience: {totalL}</h2>
				</div>
				<div className="Pokedex">
					<h2 className="Pokedex-header">Player2</h2>
					<div className="Pokedex-card">
						{rightHand.map((p) => (
							<Pokecard
								key={p.id}
								id={p.id}
								name={p.name}
								type={p.type}
								base_experience={p.base_experience}
							/>
						))}
					</div>
					<h2 className="Pokedex-total">Total Experience: {totalR}</h2>
				</div>
			</div>
		</div>
	);
};

export default Pokedex;

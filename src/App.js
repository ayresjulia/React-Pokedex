import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./pokemons";
import "./App.css";

const App = () => {
	return (
		<div>
			<Pokedex pokemons={pokemons} isWinner={false} />
		</div>
	);
};

export default App;

import React, { useState } from "react";
import "../App.css";

const Pokemon = () => {

    const [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPokemonList(response.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemonList.length > 0 && pokemonList.map((pokemon, index) => {
                    return <li key={index}>{pokemon.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default Pokemon;
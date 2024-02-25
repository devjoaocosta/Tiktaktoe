#!/usr/bin/env node

const yargs = require("yargs");
const {argv} = yargs(process.argv);

const pokemon = async (pokemonName) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokemonJson = await response.json();
    console.log(pokemonJson)
}
console.
pokemon(argv.pokemon);

const printFiveMoves = () => {
    const moves = pokemon.moves.map(({ move }) => move.name);
       console.log(moves.slice(0, 5));
}

printFiveMoves(argv.pokemon);
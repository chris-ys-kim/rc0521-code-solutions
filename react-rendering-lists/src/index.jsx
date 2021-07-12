import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderPokedexList(props) {
  const PokedexListItems = pokedex.map(pokemon =>
    <li key={pokemon.number} > {pokemon.name}</li>
  );
  return (
    <ul>{PokedexListItems}</ul>
  );
}

ReactDOM.render(
  <RenderPokedexList />,
  document.querySelector('#root')
);

import Pokedex from "./Pokedex";

const Pokecard = ({ pokemons }) => (
  // console.log(pokemons);
  <div className="Pokecard-pokemons">
    {pokemons.map((pokemon) => {
      return <Pokedex pokemon={pokemon} />;
    })}
  </div>
);

export default Pokecard;

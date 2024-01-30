const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex-pokemon">
      <div className="Pokedex-name">{pokemon.name}</div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={`${pokemon.name}`}
      />
      <div>Type: {pokemon.type}</div>

      <div>EXP: {pokemon.base_experience}</div>
    </div>
  );
};
export default Pokedex;

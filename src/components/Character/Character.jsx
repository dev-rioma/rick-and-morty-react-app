const Character = ({ character }) => {
  return (
    <>
      <div className="card-character shadow-lg rounded-sm">
        <img
          className="character-img  w-60 h-62 object-cover rounded-t-sm"
          src={character.image}
          alt={character.name}
        />

        <div className="container-info py-2">
          <p className="Name-card  font-bold text-xl pl-4">
            {character.name.length > 20
              ? character.name.slice(0, 19) + "..."
              : character.name}
          </p>
          <p className="text-stone-500 text-sm pl-4  text-justify">
            {character.species}
          </p>
        </div>
      </div>
    </>
  );
};

export default Character;

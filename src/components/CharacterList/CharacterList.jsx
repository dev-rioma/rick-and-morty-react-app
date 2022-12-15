import { useContext } from "react";
import { ApiContext } from "../../context/Apicontext";
import { Link } from "react-router-dom";
import Character from "../Character/Character";
import "./CharacterList.css";

const CharacterList = () => {
  const { characters, loading, moreCharacters, error } = useContext(ApiContext);

  const renderList = () => {
    if (error) {
      return <p>{error}</p>;
    } else {
      return (
        <div className="container-main  flex flex-col items-center  sm:mx-10">
          {loading ? (
            <div>Cargando...</div>
          ) : (
            <div className="container-card xl:mx-52 sm:mx-2 md:mx-18 lg:mx-32">
              {characters === undefined && pages === undefined ? (
                <div>no encontro</div>
              ) : (
                characters.slice(0, moreCharacters).map((character) => {
                  return (
                    <Link to={`${character.id}`} key={character.id}>
                      <Character page="/" character={character} />
                    </Link>
                  );
                })
              )}
            </div>
          )}
        </div>
      );
    }
  };

  return <>{renderList()}</>;
};

export default CharacterList;

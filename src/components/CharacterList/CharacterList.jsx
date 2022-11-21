import { useContext } from 'react'
import { ApiContext } from '../../context/Apicontext';
import { Link } from "react-router-dom";
import Character from '../Character/Character'
import Search from '../Search/Search'
import Gender from '../Filter/Category/Gender/Gender';
import Species from '../Filter/Category/Species/Species';
import Status from '../Filter/Category/Status/Status'
import './CharacterList.css'
import BtnModal from '../BtnModal/BtnModal';


const CharacterList = () => {
  const {characters, loading, page, loadMore, moreCharacters, infoCharacter} = useContext(ApiContext)
  
  
  return (
    <div className='container-main  flex flex-col items-center  sm:mx-10'>
      <div className='conatainer-search flex flex-wrap justify-center gap-8'>
        <Search />
        <div className='hidden sm:flex flex-wrap justify-center gap-8 '>
          <Status />
          <Gender />
          <Species />
        </div>
        <div className='container-BtnModal sm:hidden'>
          <BtnModal 
            
          />
        </div>
      </div>

      {loading ? (
      <div>Cargando...</div>
      ) : (
        
        <div className='container-card xl:mx-52 sm:mx-2 md:mx-18 lg:mx-32' >
          { characters.slice(0, moreCharacters).map((character) => {
            return (
              <Link 
              to={`${character.id}`}
              key={character.id}
              >
                <Character page='/'  character={character} />
              </Link>
          )
          })}
        </div>
      )
      }

      <div className='flex justify-center mt-4 mb-4'>
        {(page === (infoCharacter.pages ))||(moreCharacters === infoCharacter.count)
          ? <></>
          : <button className='w-28 h-10 bg-slate-100 text-sky-400 border-2 border-slate-300 m-2 drop-shadow-xl rounded-md font-bold text-lg' onClick={loadMore}>loadMore</button>} 
  
      </div>

    </div>
    
    
  );
}

export default CharacterList;
 
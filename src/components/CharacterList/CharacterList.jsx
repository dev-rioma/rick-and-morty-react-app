import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Character from '../Character/Character'
import Search from '../Search/Search'
import Gender from '../Filter/Category/Gender/Gender';
import Species from '../Filter/Category/Species/Species';
import Status from '../Filter/Category/Status/Status'
import './CharacterList.css'
import BtnModal from '../BtnModal/BtnModal';


const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [moreCharacters, setMoreCharacters] = useState(8)
  const [search, setSearch] = useState("")
  const [infoCharacter, setInfoCharacter] = useState([])
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  
  var api = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  
  useEffect(() =>{
    async function fetchData() {
      const response = await fetch(api)
      const data = await response.json()
      setLoading(false)
      if (page === 1){
      setCharacters(data.results)
      setInfoCharacter(data.info)
      }
      if (page > 1) {
        setCharacters([...characters, ...data.results]) }

    }
    fetchData()
    
  }, [api])

 

 const loadMore = () => {
  if (moreCharacters == (characters.length)) {
    setPage((page) => page + 1)
  } 
    setMoreCharacters((moreCharacters) => moreCharacters + 4)
 }



  return (
    <div className='container-main  flex flex-col items-center  sm:mx-10'>
      <div className='conatainer-search flex flex-wrap justify-center gap-8'>
        <Search setSearch={setSearch} setPage={setPage} setMoreCharacters={setMoreCharacters}/>
        <div className='hidden sm:flex flex-wrap justify-center gap-8 '>
          <Status setPage={setPage}  setStatus={setStatus} setMoreCharacters={setMoreCharacters}/>
          <Gender setPage={setPage} setGender={setGender} setMoreCharacters={setMoreCharacters}/>
          <Species setPage={setPage} setSpecies={setSpecies} setMoreCharacters={setMoreCharacters}/>
        </div>
        <div className='container-BtnModal sm:hidden'>
          <BtnModal 
            setPage={setPage} 
            status={status} 
            setStatus={setStatus}
            gender={gender} 
            setGender={setGender}
            species={species}
            setSpecies={setSpecies}
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
 
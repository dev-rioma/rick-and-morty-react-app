import { createContext, useState, useEffect } from "react";


export const ApiContext = createContext()

export const ApicontextProvider = (props) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [infoCharacter, setInfoCharacter] = useState([])
  const [page, setPage] = useState(1)
  const [moreCharacters, setMoreCharacters] = useState(8)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  
  

  var api = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  

  async function fetchData(api) {
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

 

  useEffect(() =>{
    fetchData(api)
      
  }, [api])

  const loadMore = () => {
    if (moreCharacters == (characters.length)) {
      setPage((page) => page + 1)
    } 
      setMoreCharacters((moreCharacters) => moreCharacters + 4)
   }
  

  return (
    <ApiContext.Provider value={{characters, infoCharacter, loading, loadMore, setGender, setSearch, setStatus, setSpecies, setMoreCharacters, status, gender, species, page, setPage, moreCharacters}}>
      {props.children}
    </ApiContext.Provider>
  );
}


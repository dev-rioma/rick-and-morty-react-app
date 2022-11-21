import { useContext } from "react";
import { ApiContext } from "../../context/Apicontext";
const Search = () => {

  const { setSearch, setPage, setMoreCharacters } = useContext(ApiContext)

  return (
    <div className="w-64 h-16">
      <input
      className="w-full h-full inline-flex w-full justify-center rounded-md border border-gray-300 bg-white h-16 items-center px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
        type="text" 
        placeholder=" search characters"
        onChange={(e) =>{
          setSearch(e.target.value)
          setMoreCharacters(8)
          setPage(1)
        }}
      />
    </div>
  );
}

export default Search;
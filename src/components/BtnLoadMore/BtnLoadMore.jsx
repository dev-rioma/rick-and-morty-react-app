import { useContext } from "react";
import { ApiContext } from "../../context/Apicontext";

const BtnLoadMore = () => {
  const {
    page,
    loadMore,
    moreCharacters,
    infoCharacter,
  } = useContext(ApiContext);
  return (
    <>
      <div className="flex justify-center mt-4 mb-4">
        {page === infoCharacter.pages ||
        moreCharacters === infoCharacter.count ||
        page === undefined ? (
          <></>
        ) : (
          <button
            className="w-28 h-10 bg-slate-100 text-sky-400 border-2 border-slate-300 m-2 drop-shadow-xl rounded-md font-bold text-lg"
            onClick={loadMore}
          >
            loadMore
          </button>
        )}
      </div>
    </>
  );
};

export default BtnLoadMore;

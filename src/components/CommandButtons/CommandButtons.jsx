import Filter from "../Filter/Filter";
import Search from "../Search/Search";

const CommandButtons = () => {
  return (
    <>
      <div className="conatainer-search flex flex-wrap justify-center gap-8">
        <Search />
        <Filter />
      </div>
    </>
  );
};

export default CommandButtons;

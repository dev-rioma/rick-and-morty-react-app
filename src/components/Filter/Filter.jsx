import Gender from "./Category/Gender/Gender";
import Species from "./Category/Species/Species";
import Status from "./Category/Status/Status";
import BtnModal from "../BtnModal/BtnModal";

const Filter = () => {
  return (
    <>
      <div className="hidden sm:flex flex-wrap justify-center gap-8 ">
        <Status />
        <Gender />
        <Species />
      </div>
      <div className="container-BtnModal sm:hidden">
        <BtnModal />
      </div>
    </>
  );
};

export default Filter;

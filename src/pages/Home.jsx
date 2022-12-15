import BtnLoadMore from "../components/BtnLoadMore/BtnLoadMore";
import CharacterList from "../components/CharacterList/CharacterList";
import CommandButtons from "../components/CommandButtons/CommandButtons";

import MainTitle from "../components/Maintitle/MainTitle";

const Home = () => {
  return (
    <>
      <MainTitle />
      <CommandButtons />
      <CharacterList />
      <BtnLoadMore />
    </>
  );
};

export default Home;

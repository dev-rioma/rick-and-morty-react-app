import titleWeb from "/src/assets/titleRickAndMorty.svg";

const MainTitle = () => {
  return (
    <div className="container-title-main flex justify-center mt-6 mb-6">
      <img src={titleWeb} alt="title" />
    </div>
  );
};

export default MainTitle;

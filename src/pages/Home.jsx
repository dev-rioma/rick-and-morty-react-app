import CharacterList from '../components/CharacterList/CharacterList'
import  titleWeb  from '/src/assets/titleRickAndMorty.svg'


const Home = () => {
  return (
    <>
      <div className='container-title-main flex justify-center mt-6 mb-6'>
        <img src={titleWeb} alt="title" />
      </div>
      <CharacterList />
    </>
  );
}

export default Home;
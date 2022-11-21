import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const CardDetail = () => {
  const { id } = useParams()
  const [characterDetail , setCharacterDetail] = useState([])
  const { name, image, status, species, type, gender, origin, location, episode } = characterDetail
  const api = `https://rickandmortyapi.com/api/character/${id}`

  // const listEpisode = episode?.map((element) => element[element.length-1]);
  // const indexEpisode = listEpisode.splice(0,4);
  // console.log(indexEpisode)

  useEffect(() =>{
    async function fetchData() {
      const response = await fetch(api)
      const data = await response.json()
      setCharacterDetail(data)
      
    }
    // async function fetchEpisodeData() {
    
    // }
    fetchData()   
  }, [id])
  
  
  

  return (
    <div className='container-details mt-8'>
      <div className='flex flex-col justify-center'>
        <Link to='/'>
          <div className='flex flex-column items-center gap-2 realtive'>
              <AiOutlineArrowLeft style={{fontWeight: 'bolder'}}/>
              <h1 className='font-bold'>Go Back</h1>
          </div>
          </Link>
        <div className='container-img-name flex flex-col justify-center items-center justify-center'>
          <img className='rounded-full' src={image} alt="imagen" />
          <h1 className='font-bold text-xl'>{name}</h1>
        </div>
      <div className='row-2 flex flex-row justify-center mt-12'>
        <div className='col-1 w-96'>
          <p className='font-bold text-gray-700 mb-8'>Informations</p>
          <ul>
            <li className='h-16  border-b-2 border-stone-100 items-center'>
              <p className='font-bold'>Gender</p>
              <p >{gender}</p>
            </li>
            <li className='h-16  border-b-2 border-stone-100 items-center'>
              <p className='font-bold'>Status</p>
              <p>{status}</p>
            </li>
            <li className='h-16  border-b-2 border-stone-100 items-center'>
              <p className='font-bold'>Specie</p>
              <p>{species}</p>
            </li>
            <li className='h-16  border-b-2 border-stone-100 items-center'>
              <p className='font-bold'>Origin</p>
              <p>{origin?.name}</p>
            </li>
            <li className='h-16  border-b-2 border-stone-100 items-center'>
              <p className='font-bold'>Type</p>
              <div>{type ? type : <div className='w-6 h-6'></div>}</div>
            </li>
            <li className='h-16  border-b-2 border-stone-100 items-center'>
              <p className='font-bold'>Location</p>
              <p>{location?.name}</p> 
            </li>
          </ul>
        </div>
        <div className='col-2 w-96'>
        <p className='font-bold text-gray-700'>Episodes</p>
        <ul>
          <li>
            <p></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p></p>
          </li>
        </ul>
        </div>
       
      </div>
      </div>
    </div>
  );
}

export default CardDetail;
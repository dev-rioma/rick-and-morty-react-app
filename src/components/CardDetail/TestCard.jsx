import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const TestCard = () => {
  const [charaterId, setcharaterId] = useState("")
  const [episodeInfo, setepisodeInfo] = useState("")
  const { id } = useParams();
  const { name, image, status, species, type, gender, origin, location } = charaterId



  const callApiId = () => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setcharaterId(data)
        callAppiEpisode(data?.episode)
      })
  }

  const callAppiEpisode = (episode) => {
    let index = episode.map((e) => e.slice(40, e.length))
    console.log(index)
    fetch(`https://rickandmortyapi.com/api/episode/${index.length > 4 ? index.slice(0,4) : index}`)
      .then((res) => res.json())
      .then((data2) =>{
        setepisodeInfo(data2)
        console.log(episodeInfo)
       })
    
  } 

  useEffect(callApiId , [id])
  
  console.log(episodeInfo)

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
          { episodeInfo !== undefined &&
            episodeInfo.length > 0 ?
            episodeInfo.map((episode)=>{return(
            <div key={episode?.id}>
              <p>{episode?.name}</p>
              <p>{episode?.air_date}</p>
              <p>{episode?.episode}</p>
            </div>
          )})
          : <div>
            <p>{episodeInfo?.name}</p>
            <p>{episodeInfo?.air_date}</p>
            <p>{episodeInfo?.episode}</p>
          </div>
          }

        </div>
       
      </div>
      </div>
    </div>
  );
}

export default TestCard;
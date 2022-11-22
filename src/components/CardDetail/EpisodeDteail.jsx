import { useEffect, useState } from "react";
import React  from 'react';

const EpisodeDteail = ({listIndex}) => {
  const [episodeDetail, setepisodeDetail] = useState([])
  const api = `https://rickandmortyapi.com/api/episode/${listIndex.slice(0,4).join(",")}`
  
  
  
  
  useEffect(() =>{
    (async function ()  {
      let data = await fetch(api).then((res)=> res.json())
      setepisodeDetail(data)  
    }) ()  
  },[api]) 
  
  console.log(listIndex.length)
  
  return (
    <>
      { episodeDetail !== undefined &&
        episodeDetail.length > 0 && 
        episodeDetail.map((e) =>{ return(
        <div key={e.id}>
          <p>{e.name}</p>
          <p>{e.air_date}</p>
          <p>{e.episode}</p>
        </div>
        )
      })}
    </>
  );
}

export default EpisodeDteail;
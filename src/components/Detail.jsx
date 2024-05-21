import React, { useEffect, useState } from 'react'
import GeneralContext from '../GeneralContext'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'

export default function Detail() {
    const navigate = useNavigate()
    const {target, dataPlanets  } = useContext(GeneralContext);
    const detailPage = dataPlanets.results.filter((item)=> item.name === target)
    console.log(detailPage)

const backClick = ()=>{
    navigate('/')
}



  return (
        <>
            <div>
                <button className='detail-btn' onClick={backClick}>X</button>
                {
                    detailPage.map((item)=>(
                        <div className='detail-card'>
                            <img className='detail-img' src="https://www.denofgeek.com/wp-content/uploads/2020/06/star-wars-outrider.jpg?fit=1024%2C552" alt="" />
                            <h3>Model : {item.model}</h3>
                            <h3>Manufacturer : {item.manufacturer}</h3>
                            <h3>Length : {item.length}</h3>
                            <h3>Max Atmosphering Speed : {item.max_atmosphering_speed}</h3>
                            <h3>Passengers : {item.passengers}</h3>
                            <h3>Crew : {item.crew}</h3>
                            <h3>Cargo Capacity : {item.cargo_capacity}</h3>
                            <h3>Hyperdrive Rating: {item.hyperdrive_rating} </h3>

                        </div>
                    ))
                }
            </div>


        </>

    
  )
}

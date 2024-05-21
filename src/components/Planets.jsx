import  'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Planets.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GeneralContext from '../GeneralContext'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';



export default function Planets() {
    const {target, setTarget, dataPlanets , setDataPlanets} = useContext(GeneralContext);
    const [isLoading , setLoading] = useState(true);
    const [urlPlanets ,setUrlPlanets] = useState(`https://swapi.dev/api/starships/?page=1`)
    const navigate = useNavigate()
    const [filterText , setFilterText] = useState('')

    
     
  
    useEffect(()=>{
        axios.get(urlPlanets)
        .then((res) =>{
            setDataPlanets(res.data);
            setLoading(false);
            console.log(res)
        });
        
    },[urlPlanets])

    if (isLoading) {
		return (
			<div>
				<div>
					<h1 className="txt-shadow-gold">StarShips</h1>
					<button
						disabled={true}
					>
						⏪ Previous Page
					</button>
					<button
						disabled={true}
					>
						Next Page⏩
					</button>
				</div>
				<div className="overlay">
					Loading...
				</div>
			</div>
		);
	}

  const filtered = dataPlanets.results.filter((item)=>{
    return Object.keys(item).some((key)=> item[key].toString().toLowerCase().includes(filterText.toLowerCase()))
    
  })

    const allPlanetsOnPage = filtered.map((item)=>{
        return (
          
                <Card className='starship' sx={{ maxWidth: 365  }}>
            <CardMedia
              sx={{ height: 120 }}
              image="https://www.denofgeek.com/wp-content/uploads/2020/06/star-wars-outrider.jpg?fit=1024%2C552"
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
             <p> Model : {item.model}</p>
             <p>Manufacturer : {item.manufacturer}</p>
            <p>Length : {item.length}</p>
              </Typography>
            </CardContent>
            <CardActions className='card-actions'>
              <Button value={item.name}
               onClick={(e)=>{
                setTarget(e.target.value)
                navigate('/detail')
               }} size="small" variant='outlined'>Detail</Button>
            </CardActions>
          </Card>
              
        );
    });

    function nextPlanetPage() {
		setLoading(true);
		setUrlPlanets(dataPlanets.next);
	}
    function previousPage() {
		setLoading(true);
		setUrlPlanets(dataPlanets.previous);
	}
  

  
  return (
        <div className='planets'> 
            <h1 className='title'>StarShips</h1>
            <TextField value={filterText} onChange={(e)=>setFilterText(e.target.value)} className='textfield' id="filled-basic" label="Search StarShip" variant="filled" style={{backgroundColor: '#eeeeee' , borderRadius:'10px'}} />
            <main className='cards'>{allPlanetsOnPage}</main>
            <div className='buttons'>
            <button
            onClick={previousPage}
            disabled={dataPlanets.previous ? false : true}
            >⏪ Previous Page</button>
            <button
            onClick={nextPlanetPage}
            disabled={dataPlanets.next ? false : true}
            >Next Page⏩</button>
            </div>
        </div>


  )
}

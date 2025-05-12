import { ArrowLeft } from 'lucide-react';
import './player.css';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';




const Player = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjY4NThhMTEzMTc3MmJhNzcxMDJmNWVhMDMxYWNhMCIsIm5iZiI6MTc0NTkyMjM0My4wMTIsInN1YiI6IjY4MTBhOTI3MGMxMjVhOTU1MzBmZDg1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.48J81PytgEhWp0-gyktcid9GgkwYEc8GyGMVRvUaLko'
    }
  };

  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))              //console.log(res)
    .catch(err => console.error(err));
  }, [])

  return (
    
    <div className='player'>

        <button className='arrow-left' onClick={ () => navigate("/")}>
            <ArrowLeft/>
        </button>

        <iframe width={"75%"} height={"75%"} 
        src= {`https://www.youtube.com/embed/${apiData.key}`} 
        title='trailer' 
        frameBorder= "0"
        allowFullScreen ></iframe>

        <div className="player-info">
            <p>{apiData.name}</p>
            <p>{apiData.published_at.slice(0,10)}</p> 
        </div>
    </div>

    
  )
}

export default Player
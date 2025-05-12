// import '../Titlecard/Titlecard.css'
import { useEffect, useState } from 'react';
import { datacard } from '../../data/data';
import TitleCard from './TitleCard';
import { Link } from 'react-router-dom';

const Title = ({title, category}) => {          //title and category is props

    const [apiData, setapiData] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjY4NThhMTEzMTc3MmJhNzcxMDJmNWVhMDMxYWNhMCIsIm5iZiI6MTc0NTkyMjM0My4wMTIsInN1YiI6IjY4MTBhOTI3MGMxMjVhOTU1MzBmZDg1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.48J81PytgEhWp0-gyktcid9GgkwYEc8GyGMVRvUaLko'
        }
      };
           
        useEffect( () => {
            
            fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setapiData(response.results))                            //console.log(response) // result is from API in website  
            .catch(error => console.error(error));
        }, []);

  return (
    <section className='title-container'>
        <p>{title}</p>
        <Link to="/allmovie">View All ...</Link>

        <div className='card'>
            {apiData.map((moviecard) => {
                return <TitleCard movieproduct = {moviecard} key={moviecard.id} />
                  
            })}
        </div>

    </section>
  )
}

export default Title;




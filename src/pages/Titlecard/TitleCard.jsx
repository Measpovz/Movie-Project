import '../Titlecard/Titlecard.css';
import { Link } from 'react-router-dom';

const TitleCard = (props) => {

    const {id, backdrop_path, name, poster_path, original_title, time} = props.movieproduct;

  return (

    <Link to={`/player/${id}`} className="trend-card">
        <img src={`https://image.tmdb.org/t/p/w500/` + backdrop_path} alt="cover" className='title-image'/>
       
        <p className='title'>{original_title}</p>
    </Link>
  )
}

export default TitleCard;




// {`https://image.tmdb.org/t/p/w500/` + poster_path} this is concate URL and file name
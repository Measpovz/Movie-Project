//Child component of Home.jsx 

import { Link } from 'react-router-dom'
import play from '../../assets/upcoming/play.png'
import '../homes/Home.css';


const HomeCard = (props) => {

    const {id, name, rating, time, desc, starring, genres, tags, cover, video, date} = props.carditem;

  return (
    <div className="box">

            <img className='coverImg' src={cover} alt="" />
        

        <div className="content-title">
            <h1>{name}</h1>
            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
            </div>

            <span>{rating} </span>
            <span>Duration: </span>
            <span>{time}</span>
            <p>{desc}</p>
             

            <h4>
                Stars : <span>{starring}</span>
            </h4>
            <h4>
                Movie : <span>{genres}</span>
            </h4>
            <h4>
                Movie type : <span>{tags}</span>
            </h4>

            <button className="btn-play">
            <i className="fa-solid fa-play"></i> PLAY NOW
            </button>

            <div className="button-row">
                <Link to = {`/watch/${id}`}>
                    <div className='img-play'>
                        <img src={play} alt="play" />
                        <h4>Watch Trailer</h4>
                    </div>
                </Link>
            </div>


        </div>
    
    </div>
  )
}

export default HomeCard;

//const Home = (props) => {
// const {id, name, rating, time, desc, starring, genres, tags, cover, video, date} = prop

//const Home = (props) => {
// const {id, name, rating, time, desc, starring, genres, tags, cover, video, date} = prop.product

//Short of using Props and carditem is object of props
// const HomeCard = ({carditem: {id, name, rating, time, desc, starring, genres, tags, cover, video, date} }) 
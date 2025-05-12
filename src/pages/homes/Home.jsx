//Parent component of HomeCard 

import HomeCard from "./HomeCard";
import {homeData} from '../../data/data'
import { useState } from "react";
import '../homes/Home.css';
//import slide from slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//create the button right and left
const HandleArrowNext = (props) => {
  const { onClick } = props;
  
  return (
    <div className="control-button" onClick={onClick}>
          <button className="next">
              <i className="fa-solid fa-angle-right"></i>
          </button>
    </div>
  )
}

const HandleArrowPrev = (props) => {
  const { onClick } = props;
  return (
    <div className="control-button" onClick={onClick}>
      <button className="prev">
        <i className="fa-solid fa-angle-left"></i>
      </button>
    </div>
  );
};

const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <HandleArrowNext/>,
    prevArrow: <HandleArrowPrev/>,
  };

  const [items, setItems] = useState(homeData);         //use items.map cus item is the homeData 

  return (
    
        <div className="home-container">
          <Slider {...settings}>

            {items.map( (i) => {
              return <HomeCard carditem={i} key={i.id}/>
            })}

          </Slider>
        </div>        
  
  )
}

export default Home;













// const Home = ( {item} ) => {
//   return (
//     <div>
//         <div className="homeContainer">
//             {item.map( (item) => {
//               return <HomeCard key={item.id} item={item} />
//             } )}
//           </div>        
//     </div>
//   )
// }

// export default Home;


// <Slider {...settings}>

// {items.map( (i) => {
//   return <HomeCard carditem={i} key={i.id}/>
// })}

// </Slider>
import { useState } from 'react';
import Home from '../pages/homes/Home'
// import { upcome } from '../data/data'
import Title from '../pages/Titlecard/Title';
import Footer from './footer/Footer';


const Homepage = () => {

    

  return (
    <>
        <Home/>

        <Title title="Popular Movies" category={"now_playing"}/> 
        <Title title="Recommended Movies" category={"top_rated"}/> 
        <Title title="Latest Movies" category={"upcoming"}/>  
        <Title title="Top Rate Movies" category={"top_rated"}/>  
        <Title title="Up Coming Movies" category={"upcoming"}/>  
        
        <Footer/>
    </>
  )
}

export default Homepage;


// import Homes from './Homes'
// <Homes/>
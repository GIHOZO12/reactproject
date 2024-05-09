import React, { useState } from "react";
import Header from "./Components/Header/Header";
import './App.css';
import HeroSection from "./Components/Header/HeroSection/HeroSection";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Compus from "./Components/Compus/Compus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  const [playState,setPlayState]=useState(false);

  return (
    <div>
    <Header/>
    <Title subTitle='Our programs' title='What we offer'/>
    <HeroSection/>
   
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='Compus photos'/>
  <Compus/>
  <Title subTitle='TESTIMONIALS' title='What student says'/>
  <Testimonials/>
  
  <Title subTitle='Contact us' title='Get in Touch'/>
  <Contact/>
  <Footer/>
  <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
    
  )

}

export default App;

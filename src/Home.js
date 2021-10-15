import React from 'react';
import './Home.css';
import meitsi from './img/meitsi.jpg';

const Home = () => (
  <div className="Home">
    <header className="Home-header">
      <h1 id="home"><a href="https://kytonie.me" rel="noopener noreferrer">kytonie.me</a></h1>
    </header>
    <div className="Bread">
      <img src={meitsi} id="meitsi" alt="epic"></img>
      <p>Työn alla.</p>
    </div>
  </div>
)

export default Home
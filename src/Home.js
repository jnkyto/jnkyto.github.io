import React from 'react';
import './Home.css';
import meitsi from './img/meitsi.jpg';
import {FormattedMessage} from 'react-intl';

const Home = () => (
  <div className="Home">
    <header className="Home-header">
      <h1 id="home"><a href="https://kytonie.me" rel="noopener noreferrer">kytonie.me</a></h1>
    </header>
    <div className="Bread">
      <img src={meitsi} id="meitsi" alt="Me guzzling down an unhealthy drink."></img>
      <p><FormattedMessage id='work.in.progress' defaultMessage='Work in progress.'></FormattedMessage></p>
    </div>
  </div>
)

export default Home
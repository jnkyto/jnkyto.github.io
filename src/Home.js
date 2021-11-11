import React from 'react';
import './Home.css';
import meitsi from './img/meitsi.jpg';
import {FormattedMessage} from 'react-intl';

const Home = () => (
  <div className="home">
    <div className="bread">
      <img src={meitsi} id="meitsi" alt="Me guzzling down an unhealthy drink."></img>
      <p><FormattedMessage id='work.in.progress' defaultMessage="Work in progress."></FormattedMessage></p>
    </div>
  </div>
);

export default Home;

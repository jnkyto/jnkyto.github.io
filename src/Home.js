import React from 'react';
import './Home.css';
import meitsi from './img/meitsi.jpg';
import {FormattedMessage} from 'react-intl';

const Home = () => (
  <div className="home">
    <div className="bread">
      <img src={meitsi} id="meitsi" title="Me, sitting on a rocking chair, holding an unhealthy drink."
      alt="Me, sitting on a rocking chair, holding an unhealthy drink." loading="lazy"></img>
      <p><FormattedMessage id='work.in.progress' defaultMessage="Work in progress."></FormattedMessage></p>
    </div>
  </div>
);

export default Home;

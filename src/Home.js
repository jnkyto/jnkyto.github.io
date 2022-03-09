import React from 'react';
import './styles/Home.css';
import meitsi from './img/meitsi.jpg';
import {FormattedMessage} from 'react-intl';

const Home = () => (
  <div className="home">
    <div className="bread">
      <img src={meitsi} id="meitsi" title="Me, looking at the camera with a stupid suprised smile."
    alt="Me, looking at the camera with a stupid suprised smile." loading="lazy"/>
      <p><FormattedMessage id='work.in.progress' defaultMessage="Work in progress."/></p>
    </div>
  </div>
);

export default Home;

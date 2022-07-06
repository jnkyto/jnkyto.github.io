import React from 'react';
import './styles/Home.css';
import meitsi from './img/meitsi.jpg';
import marumaru from './img/marumaru.webp'
import digit from './img/digit.webp'
import {FormattedMessage} from 'react-intl';

const Home = () => (
  <div className="home">
    <div className="main_root">
      <div className="main_container">
        <ul className="main_table">
          <li className="west_side">
            <img src={meitsi} id="meitsi" title="Me, looking at the camera with a stupid suprised smile."
                 alt="Me, looking at the camera with a stupid suprised smile." loading="lazy"/>
          </li>
          <li className="east_side">
            <h1>👷&nbsp;<FormattedMessage id='work.in.progress' defaultMessage="Work in progress."/>&nbsp;🛠️</h1>
            <div className="code_block">
              <p>name = "Joona Kytöniemi"</p>
              <p>age = 22</p>
              <p>occupation = "CSE student"</p>
              <p>location = "Turku, Finland"</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="divider"/>
    <div className="bread">
      <h1><FormattedMessage id='bread.projects' defaultMessage="Projects:"/></h1>
      <ul className="proj_table">
        <li className="proj_entry">
          <a href="https://marumaru.fi/">
            <img src={marumaru} id="marumaru_logo" title="Logo of marumaru.fi" alt="Logo of marumaru.fi" loading="lazy"/>
          </a>
          <h3>marumaru</h3>
          <p><FormattedMessage id='project.marumaru' defaultMessage="owner, admin"/></p>
        </li>
        <li className="proj_entry">
          <a href="https://digit.fi/">
            <img src={digit} id="digit_logo" title="Logo of Digit ry" alt="Logo of Digit ry" loading="lazy"/>
          </a>
          <h3>Digit ry</h3>
          <p><FormattedMessage id='project.digit' defaultMessage="webmaster, graphics"/></p>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;

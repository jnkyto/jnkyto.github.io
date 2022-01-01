import './LanguageSwitch.css';
import React from 'react';
import { IntlContext } from "./IntlContext";
import {FormattedMessage} from 'react-intl';
import enImg from './img/langbtn/en.png';
import fiImg from './img/langbtn/fi.png';
import jpImg from './img/langbtn/jp.png';

const LanguageSwitch = () => {
  const {switchToEnglish, switchToFinnish, switchToJapanese} = React.useContext(IntlContext);
  return (
    <div className="lang">
      <div className="lang-container">
        <img src={enImg} role="link" id="lang-button" onClick={switchToEnglish} title="Change site language to English."
        alt="Clickable British flag for changing the site language to English." tabIndex="0"></img>
      </div>
      <div className="lang-container">
        <img src={fiImg} role="link" id="lang-button" onClick={switchToFinnish} title="Change site language to Finnish."
        alt="Clickable Finnish flag for changing the site language to Finnish." tabIndex="0"></img>
      </div>
      <div className="lang-container">
        <img src={jpImg} role="link" id="lang-button" onClick={switchToJapanese} title="Change site language to Japanese."
        alt="Clickable Japanese flag for changing the site language to Japanese." tabIndex="0"></img>
      </div>
      <p><FormattedMessage id='language.change' defaultMessage="(click flag to change language)"></FormattedMessage></p>
    </div>
  );
};

export default LanguageSwitch;

import './LanguageSwitch.css';
import React from 'react';
import { IntlContext } from "./IntlContext";
import {FormattedMessage} from 'react-intl';
import enImg from './img/langbtn/en.png';
import fiImg from './img/langbtn/fi.png';
import jpImg from './img/langbtn/jp.png';

const LanguageSwitch = () => {
  const { switchToEnglish, switchToFinnish, switchToJapanese } = React.useContext(IntlContext);
  return (
    <div className="lang">
      <img src={enImg} id="lang-button" onClick={switchToEnglish} alt="British flag for language change"></img>
      <img src={fiImg} id="lang-button" onClick={switchToFinnish} alt="Finnish flag for language change"></img>
      <img src={jpImg} id="lang-button" onClick={switchToJapanese} alt="Japanese flag for language change"></img>
      <p><FormattedMessage id='language.change' defaultMessage="(click flag to change language)"></FormattedMessage></p>
    </div>
  );
};

export default LanguageSwitch;

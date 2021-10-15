import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import English from './locale/en_us.json';
import Finnish from './locale/fi_fi.json';
import Japanese from './locale/ja_jp.json';
import './index.css';
import Home from './Home';
import Footer from './Footer';

const Messages = {
  'en': English,
  'fi': Finnish,
  'ja': Japanese
}

const Lang = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={Lang} messages={Messages[Lang]}>
    <><Home /><Footer /></>
  </IntlProvider>, 
document.getElementById('root')
);
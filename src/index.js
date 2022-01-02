import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProviderWrapper } from './IntlContext';
import './styles/Index.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render(
  <IntlProviderWrapper>
    <><Header /><Home /><Footer /></>
  </IntlProviderWrapper>,
document.getElementById('root')
);

import React from 'react';
import { createRoot } from "react-dom/client";
import { IntlProviderWrapper } from './IntlContext';
import './styles/Index.css';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <IntlProviderWrapper>
    <><Header /><Home /><Footer /></>
  </IntlProviderWrapper>
);

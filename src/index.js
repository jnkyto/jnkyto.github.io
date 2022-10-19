import React from 'react';
import { createRoot } from "react-dom/client";
import { IntlProviderWrapper } from './IntlContext';
import './styles/Index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Blogs from "./pages/Blogs";


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <IntlProviderWrapper>
    <BrowserRouter>
      <Routes>
        <Route exact  element={<App />}>
          <Route exact path={"/"} element={<Home />}/>
          <Route path={"/music"} element={<Music />}/>
          <Route path={"/blogs"} element={<Blogs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </IntlProviderWrapper>
);

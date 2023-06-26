import React from 'react';
import './pages/Home.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;

import '../styles/Header.css';
import React from 'react';
import LanguageSwitch from './LanguageSwitch';

const Header = () => (
    <div className="header-container">
        <header className="header">
            <h1 id="go-home"><a href="/" title="Click to go back to index page." rel="noopener noreferrer">kytonie.me</a></h1>
            <LanguageSwitch />
        </header>
    </div>
);

export default Header;

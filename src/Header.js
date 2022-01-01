import './Header.css';
import React from 'react';
import LanguageSwitch from './LanguageSwitch';

const Header = () => (
    <div className="header-container">
        <header className="header">
            <h1 id="go-home"><a href="https://kytonie.me" title="Click to go back to index page." rel="noopener noreferrer">kytonie.me</a></h1>
            <LanguageSwitch />
        </header>
    </div>
);

export default Header;

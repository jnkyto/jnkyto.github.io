import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.css';

const Footer = () => (
    <div className="footerbody">
        <footer className="footer">
            <p>©{new Date().getFullYear()} <FormattedMessage id='author.name' defaultMessage='Joona Kytöniemi'></FormattedMessage>
                <br></br>
                <FormattedMessage id='contact' defaultMessage='Contact'></FormattedMessage>: kjoona<span>@</span>outlook.com
            </p>
            <ul className="footer_links">
                <li>
                    <a href="https://github.com/jnkyto">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kjoona/">LinkedIn</a>
                </li>
                <li>
                    <a href="https://twitter.com/jnkyto">Twitter</a>
                </li>
            </ul>
        </footer>
    </div>
)

export default Footer;
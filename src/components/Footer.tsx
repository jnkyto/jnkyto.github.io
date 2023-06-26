import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.css';

const Footer = () => (
    <table className="footer-table">
        <tbody className='footer-table-body'>
            <tr>
                <td id="author-td">
                    <p>©{new Date().getFullYear()} <FormattedMessage id='author.name' defaultMessage=''/>Joona&nbsp;Kytöniemi</p>
                </td>
                <td id="contact-td">
                    <FormattedMessage id='contact' defaultMessage='Contact'/>: kjoona<span>@</span>outlook.com
                </td>
                <td id="sns-links-td">
                    <ul className="footer-links">
                        <li>
                            <a href="https://github.com/jnkyto">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kjoona/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://mastodon.social/@kjoona">Mastodon</a>
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

)

export default Footer;

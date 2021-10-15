import React from 'react'
import './Footer.css'

const Footer = () => (
    <div className="footerbody">
        <footer className="footer">
            <p>©{new Date().getFullYear()} Joona Kytöniemi</p>
            <ul className="footer_links">
                <li>
                    <a href="https://github.com/jnkyto">GitHub</a>
                </li>
                <li>
                    <a href="https://twitter.com/jnkyto">Twitter</a>
                </li>
            </ul>
        </footer>
    </div>
)

export default Footer
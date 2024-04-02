import React  from 'react';
import "./style.css"
import {contacts} from "./../contact/Contact.data"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        {contacts.map((item) => {
                            return (<li className="social-icon"><a href={item.link}><img src={item.icon} alt={item.origin}></img></a></li>);
                        })}
                    </ul>
                    <div className="copyright">
                        <p>© 2024 Max Chebola</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

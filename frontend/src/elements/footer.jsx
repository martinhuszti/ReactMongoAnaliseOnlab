import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import logo from '../img/Analisys_logo.svg';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_max">
                    <img id="Img_logo" src={logo} alt="Logo"/>
                </div>
            </footer>

        );
    }
}


export default Footer;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';



//import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {


    render() {
        return (


            
            <nav className="header">
                <div className="container-fluid">
                    <ul id="largemenu" className="row">
                        <li className="col menuitem padding_menu">
                            <a href>Hírek</a>
                        </li>
                        <li className="col menuitem padding_menu">
                            <a>Számonkérés</a>
                        </li>
                        <li className="col menuitem padding_menu">
                            <a>Információ</a>
                        </li>
                        <li className="col menuitem padding_menu">
                            <a> Feladatok</a>
                        </li>
                        <li className="col menuitem padding_menu">
                            <a> Követelmény</a>
                        </li>
                        <li id="loginitem" className="col menuitem">
                            <ul id="login" className="padding_menu">
                                <a>Profil</a>
                            </ul>

                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}


export default Header;
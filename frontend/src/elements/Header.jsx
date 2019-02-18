import React, {Component} from 'react';
import './menu.css';
import 'D:/GitLab/analise/frontend/node_modules/bootstrap/dist/css/bootstrap.css';


//import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <nav className="header">
                <div className="container-fluid">
                    <div id="largemenu" className="row">
                        <div className="col menuitem padding_menu">
                            Hírek
                        </div>
                        <div className="col menuitem padding_menu">
                            Számonkérés
                        </div>
                        <div className="col menuitem padding_menu">
                            Információ
                        </div>
                        <div className="col menuitem padding_menu">
                            Feladatok
                        </div>
                        <div className="col menuitem padding_menu">
                            Követelmény
                        </div>
                        <div id="loginitem" className="col menuitem">
                            <ul id="login" className="padding_menu">
                                Profil
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>


        );
    }
}


export default Header;
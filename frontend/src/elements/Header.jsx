import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import News from './News';

const Home = () => (
    <News/>
  );

const Header = () => (
    <Router>
    <div>
        <nav className="header">
            <div className="container-fluid">
                <ul id="largemenu" className="row">
                    <li className="col menuitem padding_menu">
                        <Link to="/">Hírek</Link>
                    </li>
                    <li className="col menuitem padding_menu">
                        <Link to="/News">Számonkérés</Link>
                    </li>
                    <li className="col menuitem padding_menu">
                        <Link to="/">Információ</Link>
                    </li>
                    <li className="col menuitem padding_menu">
                        <Link to="/"> Feladatok</Link>
                    </li>
                    <li className="col menuitem padding_menu">
                        <Link to="/"> Követelmény</Link>
                    </li>
                    <li id="loginitem" className="col menuitem">
                        <ul id="login" className="padding_menu">
                            <Link to="/">Profil</Link>
                        </ul>

                    </li>
                </ul>
            </div>
        </nav>

        <Route exact path="/News" component={() => <p style={{marginTop: '200px'}}>asdasdasdasd</p>} />
        <Route exact path="/" component={Home} />
     </div>
    </Router>
);

export default Header;
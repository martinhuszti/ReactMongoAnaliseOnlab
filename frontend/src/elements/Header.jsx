import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import News from './News';
import Requirements from './requirements';
import LoginForm from './LoginForm';
import LoggedIn from './loggedin';

const Home = () => (
    <News />
);



const Header = () => (

    <Router >
        <div>
            <nav className="header">
                <div className="container-fluid">
                    <ul id="largemenu" className="row">
                        <li className="col menuitem padding_menu">
                            <Link to="/">Hírek</Link>
                        </li>
                        <li className="col menuitem padding_menu">
                            <Link to="/Exams">Számonkérés</Link>
                        </li>
                        <li className="col menuitem padding_menu">
                            <Link to="/Informations">Információ</Link>
                        </li>
                        <li className="col menuitem padding_menu">
                            <Link to="/LoggedIn"> Feladatok</Link>
                        </li>
                        <li className="col menuitem padding_menu">
                            <Link to="/Requirements"> Követelmény</Link>
                        </li>
                        <li id="loginitem" className="col menuitem">

                            <Link id="login" to="/LoginForm" className="padding_menu login_button">Profil</Link>

                        </li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/Exams" component={Home} />
            <Route exact path="/" component={Home} />

            <Route exact path="/Informations" component={Requirements} />
            <Route exact path="/LoggedIn" component={LoggedIn} />

            <Route exact path="/Requirements" component={Requirements} />
            <Route exact path="/LoginForm" component={LoginForm} />

            )} />
        </div>
    </Router>
);

export default Header;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import News from './News';
import Requirements from './requirements';
import LoginForm from './LoginForm';

const Home = () => (
    <News />
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
                            <Link to="/Exams">Számonkérés</Link>
                        </li>
                        <li className="col menuitem padding_menu">
                            <Link to="/Informations">Információ</Link>
                        </li>
                        <li className="col menuitem padding_menu">
                            <Link to="/Excercises"> Feladatok</Link>
                        </li>
                        <li className="col menuitem padding_menu">
                            <Link to="/Requirements"> Követelmény</Link>
                        </li>
                        <li id="loginitem" className="col menuitem">


                            <ul id="login"  className="padding_menu login_button">
                                <Link id="login" to= "/LoginForm">Profil</Link>
                            </ul>

                        </li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/Exams" component={() => <p style={{ marginTop: '200px' }}>asdasdasdasd</p>} />
            <Route exact path="/" component={Home} />

            <Route exact path="/Informations" component={Requirements} />
            <Route exact path="/Excercises" component={Requirements}
            />
            <Route exact path="/Requirements" component={Requirements} />
            <Route exact path="/LoginForm" component={LoginForm} />

            )} />
        </div>
    </Router>
);

export default Header;
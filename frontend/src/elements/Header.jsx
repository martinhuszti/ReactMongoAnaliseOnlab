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

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logged: ''


        };
        
        this.profilClick = this.profilClick.bind(this);

        
    }

    profilClick(){
        if (localStorage.getItem("loggedin") !== null || sessionStorage.getItem("loggedin") !== null) {
            this.setState({ logged: "/LoggedIn" })
            sessionStorage.setItem("loggedin", localStorage.getItem("loggedin"))
            sessionStorage.setItem("id", localStorage.getItem("id"))
            console.log("Kiskacsa22");
        }

        else {
            this.setState({ logged: "/LoginForm" })
            console.log("Kiskacsa535235");
        }
    }

    componentDidMount() {
        if (localStorage.getItem("loggedin") !== null || sessionStorage.getItem("loggedin") !== null) {
            this.setState({ logged: "/LoggedIn" })
            sessionStorage.setItem("loggedin", localStorage.getItem("loggedin"))
            sessionStorage.setItem("id", localStorage.getItem("id"))
        }

        else {
            this.setState({ logged: "/LoginForm" })
            console.log("Kiskacsa44");
        }


        console.log(this.state.logged);
    }


    render() {
        return (
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

                                    <Link id="login" onClick={this.profilClick} to={this.state.logged} className="padding_menu login_button">Profil</Link>

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
            </Router>);
    }


}



export default Header;
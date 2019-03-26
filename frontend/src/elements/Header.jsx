import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Requirements from './requirements';
import LoginForm from './LoginForm';
import LoggedIn from './loggedin';
import News from './News';
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

    profilClick= () =>{

            const sesslogged = sessionStorage.getItem("loggedin");
            const loclogged = localStorage.getItem("loggedin");
    
            if (sesslogged !== "true" || loclogged !== "true") {
                console.log("Loginfrom1");
                this.props.history.push(`/LoginForm`)
                
            }
            else{
                if(loclogged === "true"){
                    sessionStorage.setItem("loggedin", localStorage.getItem("loggedin"));
                    sessionStorage.setItem("id", localStorage.getItem("id"))
                }
                
                
                this.setState({logged:'LoggedIn'})
            }
        
    };


    render() {
        return (
            <Router >
                <div>
                    <nav className="header">
                        <div className="container-fluid">
                            <ul id="largemenu" className="row">
                                <li className="col menuitem padding_menu">
                                    <Link to="/News">Hírek</Link>
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

                                    <Link id="login" to="/LoggedIn"  className="padding_menu login_button">Profil</Link>

                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route  path="/Exams" component={Home} />
                    <Route  path="/News" component={Home} />
                    <Route exact path="/" render={() => (
                        <Redirect to="/News"/>
                    )}/>

                    <Route  path="/Informations" component={Requirements} />
                    <Route  path="/LoggedIn" component={LoggedIn} />

                    <Route  path="/Requirements" component={Requirements} />
                    <Route  path="/LoginForm" component={LoginForm} />

                    )} />
            </div>
            </Router>);
    }

}

export default Header;
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Requirements from './Menus/requirements';
import LoginForm from './Menus/LoginForm';
import LoggedIn from './Menus/loggedin';
import Informations from './Menus/Informations'
import Excercises from './Menus/Excercises'
import News from './Menus/News';
import MenuIcon from '@material-ui/icons/Menu';
import './menu.css';

const Home = () => (
    <News/>
);

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logged: '',
            dropdownOpen: false

        };
        this.toggle = this.toggle.bind(this);

        this.profilClick = this.profilClick.bind(this);


    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    profilClick = () => {

        const sesslogged = sessionStorage.getItem("loggedin");
        const loclogged = localStorage.getItem("loggedin");

        if (sesslogged !== "true" || loclogged !== "true") {
            console.log("Loginfrom1");
            this.props.history.push(`/LoginForm`)

        } else {
            if (loclogged === "true") {
                sessionStorage.setItem("loggedin", localStorage.getItem("loggedin"));
                sessionStorage.setItem("id", localStorage.getItem("id"))
            }


            this.setState({logged: 'LoggedIn'})
        }

    };


    render() {
        return (
            <Router>
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
                                    <Link to="/Excercises">Feladatok</Link>
                                </li>
                                <li className="col menuitem padding_menu">
                                    <Link to="/Requirements"> Követelmény</Link>
                                </li>
                                <li id="loginitem" className="col menuitem">

                                    <Link id="login" to="/LoggedIn" className="padding_menu login_button">Profil</Link>

                                </li>
                            </ul>
                        </div>
                        <div className="header_flex">
                            <Dropdown className="header_drpdwn" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle  className="header_background" caret>
                                    <MenuIcon/>
                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem><Link to="/News">Hírek</Link></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem><Link to="/Exams">Számonkérés</Link></DropdownItem>
                                    <DropdownItem><Link to="/Informations">Információ</Link></DropdownItem>
                                    <DropdownItem><Link to="/Excercises">Feladatok</Link></DropdownItem>
                                    <DropdownItem><Link to="/Requirements"> Követelmény</Link></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <div className="header_flex_placeholder"></div>
                            <li id="loginitem" className="col menuitem">

                                    <Link id="login" to="/LoggedIn" className="padding_menu login_button">Profil</Link>

                                </li>
                        </div>
                    </nav>

                    <Route path="/Exams" component={Home}/>
                    <Route path="/News" component={Home}/>
                    <Route exact path="/" render={() => (
                        <Redirect to="/News"/>
                    )}/>

                    <Route path="/Informations" component={Informations}/>
                    <Route path="/LoggedIn" component={LoggedIn}/>
                    <Route path="/Excercises" component={Excercises}/>

                    <Route path="/Requirements" component={Requirements}/>
                    <Route path="/LoginForm" component={LoginForm}/>

                    )} />
                </div>
            </Router>);
    }

}

export default Header;
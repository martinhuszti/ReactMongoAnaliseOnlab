import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import {Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Requirements from './Pages/requirements';
import LoginForm from './Pages/loginForm';
import LoggedIn from './Pages/base_logged_in';
import Informations from './Pages/informations'
import Excercises from './Pages/excercises'
import News from './Pages/news';
import MenuIcon from '@material-ui/icons/Menu';
import './menu.css';
import PageNotFound from './pageNotFound'

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
                                <Col className=" menuitem padding_menu">
                                    <Link to="/News">Hírek</Link>
                                </Col>
                                <Col className=" menuitem padding_menu">
                                    <Link to="/Exams">Számonkérés</Link>
                                </Col>
                                <Col className=" menuitem padding_menu">
                                    <Link to="/Informations">Információ</Link>
                                </Col>
                                <Col className=" menuitem padding_menu">
                                    <Link to="/Excercises">Feladatok</Link>
                                </Col>
                                <Col className=" menuitem padding_menu">
                                    <Link to="/Requirements"> Követelmény</Link>
                                </Col>
                                <Col id="loginitem" className=" menuitem">

                                    <Link id="login" to="/LoginForm" className="padding_menu login_button">Profil</Link>

                                </Col>
                            </ul>
                        </div>
                        <div className="header_flex">
                            <Dropdown className="header_drpdwn" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle className="header_background" caret>
                                    <MenuIcon/>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem><Link to="/News">Hírek</Link></DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem><Link to="/Exams">Számonkérés</Link></DropdownItem>
                                    <DropdownItem><Link to="/Informations">Információ</Link></DropdownItem>
                                    <DropdownItem><Link to="/Excercises">Feladatok</Link></DropdownItem>
                                    <DropdownItem><Link to="/Requirements"> Követelmény</Link></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <div className="header_flex_placeholder"/>
                            <li id="loginitem" className="col menuitem">

                                <Link id="login" to="/LoginForm" className="padding_menu login_button">Profil</Link>

                            </li>
                        </div>
                    </nav>
                    <Switch>
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
                        <Route component={PageNotFound}/>
                    </Switch>
                    )} />
                </div>
            </Router>);
    }

}

export default Header;
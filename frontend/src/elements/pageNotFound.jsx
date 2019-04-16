import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Requirements from './Pages/requirements';
import LoginForm from './Pages/loginForm';
import LoggedIn from './Pages/base_logged_in';
import Informations from './Pages/informations'
import Excercises from './Pages/excercises'
import News from './Pages/news';
import MenuIcon from '@material-ui/icons/Menu';
import './menu.css';



class PageNotFound extends Component {




    render() {
        return (
            <div id="placeholder_news">

                <div id="placeholder_header" />
                <div id="width_class" className="pg_not_found">
                <span>404</span>
                <span>Oldal nem található. </span>
                <span>Keress fel másik URL-t, vagy lépj kapcsolatba az üzemeltetővel. </span>
                </div>
            </div>


        );
    }

}

export default PageNotFound;
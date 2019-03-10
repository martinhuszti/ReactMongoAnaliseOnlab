import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import './loggedin.css';
import React, { Component } from 'react';
import LoggedIn_Data from './loggedin_data';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


class LoggedIn extends Component {


    render() {
        return (
            <Router>
                <div id="placeholder_news">
                    <div id="placeholder_header"></div>

                    <div className="news news_head">
                        <h1 className="news_text " >Login</h1>
                    </div>

                    <div className="news news_body news_body_padding flex_container">

                        <div className="menu_items flex_column">
                            <div className="menu_items box_1">
                                <p className="menu_items_text">Adatok</p>
                            </div>
                            <div className="menu_items box_1">
                                <p className="menu_items_text">Eredmények</p>
                            </div>
                            <div className="menu_items box_1">
                                <p className="menu_items_text">Jelszó változtatás</p>
                            </div>
                            <div className="menu_items box_1">
                                <p className="menu_items_text">Chat</p>
                            </div>
                            <div className="box_flex">

                            </div>
                            <div className="menu_items box_1 logout_color">
                                <p className="menu_items_text">Kijelentkezés</p>
                            </div>
                        </div>
                        <div className="content_box">
                            <LoggedIn_Data />

                        </div>
                    </div>
                </div>

                
            </Router>
        );
    }
}



export default LoggedIn;
import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import './loggedin.css';
import React, { Component } from 'react';
import LoggedIn_Data from './loggedin_data';
import LoggedIn_Result from './loggedin_results';
import Change_Pass from './change_pass';
import Chat from './loggedin_chat';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


class LoggedIn extends Component {
    constructor(props){
        super(props);

    }

    routes = [
        {
            path: "/LoggedIn/data",
            exact: true,
            main: () => <LoggedIn_Data/>
        },
        {
            path: "/LoggedIn/result",
            main: () => <LoggedIn_Result/>
        },
        {
            path: "/LoggedIn/change_pass",
            main: () => <Change_Pass/>
        },
        {
            path: "/LoggedIn/chat",
            main: () => <Chat/>
        },
        {
            path: "/logout",
            main: () => <h2>Shoelaces</h2>
        }
    ];

    logout(){
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("loggedin");
    }

    render() {

        return (
            <Router>
                <div id="loggedin_placeholder_news">
                    <div id="placeholder_header"></div>

                    <div className="news news_head">
                        <h1 className="news_text " >Login</h1>
                    </div>

                    <div className="loggedin_news news_body news_body_padding flex_container">

                        <div className="menu_items flex_column">
                            <Link to="/LoggedIn/data" className="menu_items box_1">
                                <p className="menu_items_text">Adatok</p>
                            </Link>
                            <Link to="/LoggedIn/result" className="menu_items box_1">
                                <p className="menu_items_text">Eredmények</p>
                            </Link>
                            <Link to="/LoggedIn/change_pass" className="menu_items box_1">
                                <p className="menu_items_text">Jelszó változtatás</p>
                            </Link>
                            <Link to="/LoggedIn/chat" className="menu_items box_1">
                                <p className="menu_items_text">Chat</p>
                            </Link>
                            <div className="box_flex">

                            </div>
                            <Link to="/logout" onClick={this.logout.bind(this)} className="menu_items box_1 logout_color">
                                <p className="menu_items_text">Kijelentkezés</p>
                            </Link>
                        </div>
                        <div className="content_box">
                            {this.routes.map((route, index) => (

                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            )
                            )}

                        </div>
                    </div>
                </div>


            </Router>
        );
    }
}



export default LoggedIn;
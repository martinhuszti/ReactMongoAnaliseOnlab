import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import './loggedin.css';
import React, { Component } from 'react';
import LoggedIn_Data from './loggedin_data';
import LoggedIn_Result from './loggedin_results';
import Change_Pass from './change_pass';
import Chat from './loggedin_chat';
import NewsPublication from './Teacher/news_publication';
import AddStudent from './Admin/add_person';
import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import News from './News';

const Home = () => (
    <News />
);

class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.emptyItem,
            redirect: false,
            isLoggedIn: '',
        };

    }
    emptyItem = [
        {
            link: "/data",
            text: 'Adatok'
        },
        {
            link: "/result",
            text: 'Eredmények'
        },
        {
            link: "/change_pass",
            text: 'Jelszó változtatás'
        },
        {
            link: "/chat",
            text: 'Chat'
        },
        {
            link: "/students",
            text: 'Diákok'
        },
        {
            link: "/addPerson",
            text: 'Új felhasználó'
        },
        {
            link: "/newPublication",
            text: 'Új hír közzététele'
        }
    ];

    routes = [
        {
            path: "/data",
            exact: true,
            main: () => <LoggedIn_Data />
        },
        {
            path: "/result",
            main: () => <LoggedIn_Result />
        },
        {
            path: "/change_pass",
            main: () => <Change_Pass />
        },
        {
            path: "/chat",
            main: () => <Chat />
        },
        {
            path: "/students",
            main: () => <Chat />
        },
        {
            path: "/newPublication",
            main: () => <NewsPublication />
        },
        {
            path: "/addPerson",
            main: () => <AddStudent />
        },
    ];

    logout() {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("loggedin");
        localStorage.removeItem("id");
        localStorage.removeItem("loggedin");
        
       this.props.history.push("/")
        
    }
    
    componentDidMount() {
        const sesslogged = sessionStorage.getItem("loggedin");
        const loclogged = localStorage.getItem("loggedin");

        if (sesslogged != "true" && loclogged != "true") {
            this.setState({
                isLoggedIn: "false"
            })
            
        }
        else{
            if (loclogged == "true") {
                sessionStorage.setItem("loggedin", loclogged);
                }
            this.setState({isLoggedIn:"true"})
        }
    }


    render() {

        if(this.state.isLoggedIn=="false") {
            console.log(this.state.isLoggedIn);
            return <Redirect to="/LoginForm"/>}

        return (
            <Router>
                <div id="loggedin_placeholder_news">
                    <div id="placeholder_header"></div>

                    <div className="news news_head">
                        <h1 className="news_text " >Login</h1>
                    </div>

                    <div className="loggedin_news news_body news_body_padding flex_container">

                        <div className="menu_items flex_column">
                            {this.state.items.map(items =>
                                <Link to={items.link} className="menu_items box_1">
                                    <p className="menu_items_text">{items.text}</p>
                                </Link>

                            )}

                            <div className="box_flex">

                            </div>
                            <div  onClick={this.logout.bind(this)} className="menu_items box_1 logout_color">
                                <p className="menu_items_text">Kijelentkezés</p>
                            </div>
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
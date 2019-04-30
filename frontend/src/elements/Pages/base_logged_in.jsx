import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';

import {withRouter} from "react-router";
import LoggedIn_Data from '../UserMenu/1_data';
import LoggedIn_Result from '../UserMenu/2_results';
import Change_Pass from '../UserMenu/3_change_pass';
import Chat from '../UserMenu/4_chat';
import NewsPublication from '../UserMenu/7_news_publication';
import AddStudent from '../UserMenu/6_add_person';
import AddReq from '../UserMenu/8_add_requirments';
import DeletePublication from '../UserMenu/9_deleteNews';
import AddLab from '../UserMenu/10_new_labor'
import ListStudent from '../UserMenu/5_students'
import NewTest from '../UserMenu/11_newTest'
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import {Alert} from 'reactstrap';
import './css/news.css';
import './css/loggedin.css';
import {slide as Menu} from 'react-burger-menu'

import MenuIcon from '@material-ui/icons/Menu';
import AccountBox from '@material-ui/icons/AccountBox';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import AddCommentIcon from '@material-ui/icons/AddComment';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import DeleteIcon from '@material-ui/icons/Delete';
import DashBoardIcon from '@material-ui/icons/Poll';


class LoggedIn extends Component {

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
            path: "/LoggedIn/controller",
            main: () => <Chat/>
        },
        {
            path: "/LoggedIn/students",
            main: () => <ListStudent/>
        },
        {
            path: "/LoggedIn/newPublication",
            main: () => <NewsPublication/>
        },
        {
            path: "/LoggedIn/deletePublication",
            main: () => <DeletePublication/>
        },
        {
            path: "/LoggedIn/addPerson",
            main: () => <AddStudent/>
        },
        {
            path: "/LoggedIn/addReq",
            main: () => <AddReq/>
        },
        {
            path: "/LoggedIn/addLab",
            main: () => <AddLab/>
        },
        {
            path: "/LoggedIn/newTest",
            main: () => <NewTest/>
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            items: emptyStudent,
            redirect: false,
            isLoggedIn: '',
            visible: false,
            menuToggle: false,
            menuToggleSelf: '',
        };


        if (sessionStorage.getItem("newLogin") === "true") {
            this.state.visible = true;
            window.setTimeout(() => {
                this.setState({visible: false})
            }, 2000);
            console.log("új felhasználó");
            sessionStorage.setItem("newLogin", false);
        }

        this.closeAlert = this.closeAlert.bind(this);
        this.menuClick = this.menuClick.bind(this);

        this.handleStateChange = this.handleStateChange.bind(this);
        LoggedIn.motiveBind = LoggedIn.motiveBind.bind(this);

    }

    static motiveBind(item) {
        if (item === 1)
            return <AccountBox/>;
        if (item === 2)
            return <RemoveRedEyeIcon/>;
        if (item === 3)
            return <ChatIcon/>;
        if (item === 4)
            return <PersonIcon/>;
        if (item === 5)
            return <AddCommentIcon/>;
        if (item === 6)
            return <PersonAddIcon/>;
        if (item === 7)
            return <AddCommentOutlinedIcon/>;
        if (item === 8)
            return <DeleteIcon/>;
        if (item === 9)
            return <AddIcon/>;
        if (item === 10)
            return <AddIcon/>;
        if (item === 11)
            return <DashBoardIcon/>
    }

    menuClick() {
        this.setState({
            menuToggle: !this.state.menuToggle
        })
    }

    handleStateChange(state) {
        this.setState({menuToggle: state.isOpen})
    }

    closeAlert() {
        this.setState({visible: false});
    }

    logout() {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("loggedin");
        localStorage.removeItem("id");
        localStorage.removeItem("loggedin");
        sessionStorage.removeItem("newLogin");

        this.props.history.push("/")

    }

    componentWillMount() {
        const sesslogged = sessionStorage.getItem("loggedin");
        const loclogged = localStorage.getItem("loggedin");

        if (sesslogged !== "true" && loclogged !== "true") {
            this.setState({
                isLoggedIn: "false"
            })

        } else {
            if (loclogged === "true") {
                sessionStorage.setItem("loggedin", loclogged);
            }
            this.setState({isLoggedIn: "true"})
        }
        if (this.state.isLoggedIn === "false") {
            console.log(this.state.isLoggedIn);
            return <Redirect to="/LoginForm"/>
        }
    }

    componentDidMount() {
        const loginid = sessionStorage.getItem("id");
        console.log(loginid);
        fetch(`/api/users/role/menu`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: loginid
        }).then(res => {
            return res.json()

        }).then(json => {
            this.setState({items: json});
            console.log(this.state.role);
            console.log(json);
        })
    }


    render() {

        console.log(this.state.isLoggedIn);
        const {items} = this.state;
        const {routes} = this;

        return (
            <Router>
                <div id="loggedin_placeholder_news">

                    <div id="placeholder_header"/>
                    <Menu width={'250px'} customBurgerIcon={false} isOpen={this.state.menuToggle}
                          onStateChange={(state) => this.handleStateChange(state)} className="loggedin_slidemenu">
                        <div className="menu_items_two flex_column">
                            {items.map(items =>
                                <Link to={items.link} onClick={this.menuClick} className=" menu_items_two box_1">
                                    <div className="menu_icons">{LoggedIn.motiveBind(items.motiv)}</div>
                                    <p className="menu_items_text">{items.text}</p>
                                </Link>
                            )}

                            <div className="box_flex">

                            </div>

                            <div onClick={this.logout.bind(this)} className="menu_items box_1 logout_color">
                                <p className="menu_items_text_two">Kijelentkezés</p>
                            </div>
                        </div>

                    </Menu>
                    <Alert isOpen={this.state.visible} toggle={this.closeAlert} id="loggedin_alertbox" color="primary">
                        Sikeresen bejelentkeztél! Üdv az oldalon!
                    </Alert>


                    <div id="menu_header" className="news news_head">


                        <h1 className="news_text "><MenuIcon onClick={this.menuClick} id="loggedin_menuicon"/>Login</h1>
                    </div>

                    <div className="loggedin_news news_body news_body_padding flex_container">

                        <div className="menu_items flex_column loggedin_disapier">
                            {items.map(items =>
                                <Link to={items.link} className="menu_items box_1">
                                    <div className="menu_icons">{LoggedIn.motiveBind(items.motiv)}</div>
                                    <p className="menu_items_text">{items.text}</p>
                                </Link>
                            )}

                            <div className="box_flex">

                            </div>

                            <div onClick={this.logout.bind(this)} className="menu_items box_1 logout_color">
                                <p className="menu_items_text">Kijelentkezés</p>
                            </div>
                        </div>

                        <div className="content_box">
                            {routes.map((route, index) => (

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


export default withRouter(LoggedIn);

const emptyStudent = [
    {
        link: "/LoggedIn/data",
        text: 'Adatok',
        motiv: 1,
    },
    {
        link: "/LoggedIn/result",
        text: 'Eredmények',
        motiv: 11,
    },
    {
        link: "/LoggedIn/change_pass",
        text: 'Jelszó változtatás',
        motiv: 2,
    },
    {
        link: "/LoggedIn/controller",
        text: 'Chat',
        motiv: 3,
    }
];
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/news.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import Login from './loginForm.jsx';
import { string } from 'prop-types';


class Popup extends Component {

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
        console.log(this.props.title)
        console.log("toogleval")
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            console.log("bele van kattintva")
            return;
        }

        this.handleOutsideClick();
    }

    handleOutsideClick() {
        this.props.closePopup();

    }

    render() {
        return (
            <div className='news_popup'>
                <div ref={node => { this.node = node; }} className='news_popup_inner'>
                    <h1>{this.props.title}</h1>
                    
                    <p>{this.props.text}</p>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

class Class extends Component {

    emptyItem = {
        title: '',
        text: ''

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem,
            items: [],
            redirect: false,
            showPopup: false,
            toggletitle: '',
            toggletext:'',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refreshPage = this.refreshPage.bind(this);

    }

    renderRedirect = () => {
        const logged = sessionStorage.getItem("loggedin");

        if (logged !== "true") {
            return <Redirect to='/LoginForm' />
        }
    };
    toggleupPopup = (item, ev) => {
        
        this.setState({
            toggletitle: item.title,
            toggletext: item.text
        })
        console.log(this.state.toggletitle)
        console.log("asdasdasdasd")

        this.togglePopup();
    }



    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/addnews', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
    }

    async refreshPage(event) {
        event.preventDefault();
        await fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({ items }));

        console.log("betöltés befejeeződött")
    }

    componentDidMount() {

        fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({ items }));

        console.log("betöltés befejeeződött")
    }



    render() {

        return (
            <div>
                {this.renderRedirect()}
                <Router>

                    <div id="placeholder_news">

                        <div id="placeholder_header" />
                        <div id="width_class">

                            {this.state.items.map(item => <li key={item.id}>
                                <div className="news news_head">
                                    <p onClick={this.toggleupPopup.bind(this, item)} value={item} className="news_text news_pointer">{item.title}</p>
                                </div>

                                <div className="news news_body"> {item.text}</div>
                            </li>)}

                            {this.state.showPopup ?
                                <Popup
                                title= {this.state.toggletitle}
                                text= {this.state.toggletext}
                                    closePopup={this.togglePopup.bind(this)} />
                                : null
                            }

                        </div>
                        <Switch>

                            <Route path="/login" component={Login} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }


}


export default Class;
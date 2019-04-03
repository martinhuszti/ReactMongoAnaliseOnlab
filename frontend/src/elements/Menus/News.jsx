import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Login from './LoginForm.jsx';


const simplenews = ({ match }) => (
    <div>

        <div className="news news_head">
            <p className="news_text" href="">{match.params.title}</p>
        </div>
        <div className="news news_body"> {match.params.text}</div>
    </div>
);


class Class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem,
            items: [],
            redirect: false,
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
    }

    emptyItem = {
        title: '',
        text: ''

    };


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
        })

        console.log("feltöltés befejeződött")
    }

    async refreshPage(event) {
        event.preventDefault();
        await fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({ items }))

        console.log("betöltés befejeeződött")
    }
    componentDidMount() {

        fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({ items }))

        console.log("betöltés befejeeződött")
    }


    render() {

        const { item } = this.state;

        return (
            <div>
                {this.renderRedirect()}
                <Router>

                    <div id="placeholder_news">

                        <div id="placeholder_header" />
                        <div id="width_class">

                            {this.state.items.map(item => <li key={item.id}>
                                <div className="news news_head">
                                    <Link to={item.id} className="news_text" href="">{item.title}</Link>
                                </div>

                                <div className="news news_body"> {item.text}</div>
                            </li>)}

                        </div>
                        <Switch>

                            <Route path="/:news" component={simplenews} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }


}


export default Class;
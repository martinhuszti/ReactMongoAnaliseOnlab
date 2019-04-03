import 'bootstrap/dist/css/bootstrap.min.css';
import './css/news.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import Login from './loginForm.jsx';


const simplenews = ({match}) => (
    <div>

        <div className="news news_head">
            <p className="news_text">{match.params.title}</p>
        </div>
        <div className="news news_body"> {match.params.text}</div>
    </div>
);


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
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refreshPage = this.refreshPage.bind(this);

    }

    renderRedirect = () => {
        const logged = sessionStorage.getItem("loggedin");

        if (logged !== "true") {
            return <Redirect to='/LoginForm'/>
        }
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/addnews', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
    }

    async refreshPage(event) {
        event.preventDefault();
        await fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({items}));

        console.log("betöltés befejeeződött")
    }

    componentDidMount() {

        fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({items}));

        console.log("betöltés befejeeződött")
    }


    render() {

        return (
            <div>
                {this.renderRedirect()}
                <Router>

                    <div id="placeholder_news">

                        <div id="placeholder_header"/>
                        <div id="width_class">

                            {this.state.items.map(item => <li key={item.id}>
                                <div className="news news_head">
                                    <Link to={item.id} className="news_text" href="">{item.title}</Link>
                                </div>

                                <div className="news news_body"> {item.text}</div>
                            </li>)}

                        </div>
                        <Switch>

                            <Route path="/:news" component={simplenews}/>
                            <Route path="/login" component={Login}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }


}


export default Class;
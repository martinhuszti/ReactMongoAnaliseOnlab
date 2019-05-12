import "bootstrap/dist/css/bootstrap.min.css";
import "./css/news.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./loginForm.jsx";
import Popup from "./popup";

class Class extends Component {

    emptyItem = {
        title: "",
        text: ""
    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem,
            items: [],
            redirect: false,
            showPopup: false,
            toggletitle: "",
            toggletext: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    renderRedirect = () => {
        const logged = sessionStorage.getItem("loggedin");

        if (logged !== "true") {
            return <Redirect to="/LoginForm"/>
        }
    };
    toggleupPopup = (item) => {

        this.setState({
            toggletitle: item.title,
            toggletext: item.text
        });
        console.log(this.state.toggletitle);
        console.log("asdasdasdasd");

        this.togglePopup();
    };


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


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

        await fetch("/api/news", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
    }


    componentDidMount() {

        fetch(`/api/news/top5`, {
            method: "GET",
        })

            .then((result) => {
                if (result.ok)
                    return result.json();
                else throw new Error("Backend nem elérhető")
            })
            .catch(() => {alert("Backend nem elérhető!")})

            .then(items => {
                    this.setState({items});

                  
                }
            );

        console.log("betöltés befejeeződött")
    }


    render() {

        const {items} = this.state;
        const {showPopup} = this.state;
        const {renderRedirect} = this;

        return (
            <div>

                {renderRedirect()}
                <Router>

                    <div id="placeholder_news">

                        <div id="placeholder_header"/>
                        <div id="width_class">

                            {items.map(item => <li key={item.id}>
                                <div className="news news_head">
                                    <p onClick={this.toggleupPopup.bind(this, item)}
                                       className="news_text news_pointer">{item.title}</p>
                                </div>

                                <div className="news news_body"> {item.text.substring(0, 200)} . . .</div>
                            </li>)}

                            {showPopup ?
                                <Popup
                                    title={this.state.toggletitle}
                                    text={this.state.toggletext}
                                    closePopup={this.togglePopup.bind(this)}/>
                                : null
                            }

                        </div>
                        <Switch>

                            <Route path="/login" component={Login}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }


}


export default Class;
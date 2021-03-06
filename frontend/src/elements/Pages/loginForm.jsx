import "./css/news.css";
import "./css/loginForm.css";
import React, {Component} from "react";
import {Alert, Button} from "reactstrap";
import {withRouter} from "react-router-dom";


class RegistrationForm extends Component {
    emptyUser = {
        neptun: "",
        password: ""
    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyUser,
            checklook: false,
            visible: false,
            isLoggedIn: "",

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.alertboxshow = this.alertboxshow.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    handleCheck() {

        this.setState({checklook: !this.state.checklook});

    }

    handleKeyPress(e) {


        if (e.key === "Enter") {

            this.handleSubmit(e);
        }
    }

    componentDidMount() {
        document.title = "Analízis";
        let login = sessionStorage.getItem("loggedin");
        let loginid = sessionStorage.getItem("id");
        if (loginid !== null && login === "true") {
            this.props.history.push("/LoggedIn");
        }
    }


    componentWillMount() {
        const loclogged = localStorage.getItem("loggedin");
        const locid = localStorage.getItem("id");


        if (loclogged === "true" && locid) {
            sessionStorage.setItem("loggedin", loclogged);
            sessionStorage.setItem("id", locid);
            this.setState({isLoggedIn: "true"}, this.props.history.push("/LoggedIn"));
        }


    }

    alertboxshow() {
        this.setState({visible: true});
    }

    onDismiss() {
        this.setState({visible: false});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch("/api/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
            .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        this.alertboxshow();
                        throw new Error("Hiba");
                    }
                }
            )
            .then((json) => {
                if (this.state.checklook === true) {
                    localStorage.setItem("loggedin", "true");
                    localStorage.setItem("id", json.id);
                }

                sessionStorage.setItem("loggedin", "true");
                sessionStorage.setItem("id", json.id);
                sessionStorage.setItem("newLogin", true);

                this.props.history.push("/LoggedIn");

            })
            .catch(() => {
            });

    }

    render() {
        const {item} = this.state;
        return (
            <div id="login_placeholder">
                <div id="placeholder_header"/>
                <div id="login_width">

                    <Alert isOpen={this.state.visible} color="danger" toggle={this.onDismiss}>
                        Sikertelen bejelentkezés! Rossz neptun kód vagy jelszó.
                    </Alert>

                    <div className="news news_head rounded_corners_top">
                        <p className="login_text">Bejelentkezés</p>
                    </div>
                    <div className="news news_body login_color rounded_corners_bottom">
                        <div className="center_login">
                            <form onSubmit={this.handleSubmit}>
                                <label className="center_login">
                                    <div className="helper_text">Neptun kód:</div>
                                    <input className="login_color loginform_text" type="text"
                                           name="neptun"
                                           id="neptun"
                                           value={item.neptun || ""}
                                           onChange={this.handleChange}
                                    />

                                    <div className="helper_text ">Jelszó:</div>
                                    <input className="login_color loginform_pass"
                                           type="password"
                                           name="password"
                                           id="password"
                                           value={item.password || ""}
                                           onChange={this.handleChange}
                                    />
                                    <div className="remember_me">
                                        <input type="checkbox" id="remember_me"
                                               name="_remember_me" onClick={this.handleCheck}/>
                                        <label className="remember_me_text helper_text">Maradjak bejelentkezve</label>
                                    </div>

                                </label>

                                <div className="center_login">
                                    <Button className="button_color button_width" onClick={this.handleSubmit}
                                            onKeyPress={this.handleKeyPress} type="submit"
                                            variant="primary">
                                        <p className="button_width">Belépés</p></Button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        );
    }


}


export default withRouter(RegistrationForm);
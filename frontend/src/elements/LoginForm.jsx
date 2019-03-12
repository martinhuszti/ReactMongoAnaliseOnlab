import './news.css';
import './LoginForm.css'
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';

class RegistrationForm extends Component {
    emptyUser = {
        neptun: '',
        password: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyUser,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        await fetch('/loginUser', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(response => response.json())
            .then(json => {
                if (json.response == "-1") alert("Hibás felhasználónév vagy jelszó");
                else {
                    console.log(json);
                    sessionStorage.setItem("loggedin","true");
                    sessionStorage.setItem("id", json.response);
                    alert("Sikeresen bejelentkezve!")
                    this.props.history.push('/LoggedIn');
                }
            })

    }

    render() {
        const {item} = this.state;
        return (
            <div id="placeholder_news">
                <div id="placeholder_header"></div>
                <div id="login_width">

                    <div className="news news_head rounded_corners_top">
                        <p className="login_text">Bejelentkezés</p>
                    </div>
                    <div className="news news_body login_color rounded_corners_bottom">
                        <div className="center_login">
                            <form Submit={this.handleSubmit}>
                                <label className="center_login">
                                    <div className="helper_text">Neptun kód:</div>
                                    <input className="login_color" type="text"
                                           name="neptun"
                                           id="neptun"
                                           value={item.neptun || ''}
                                           onChange={this.handleChange}
                                    />

                                    <div className="helper_text">Jelszó:</div>
                                    <input className="login_color"
                                           type="password"
                                           name="password"
                                           id='password'
                                           value={item.password || ''}
                                           onChange={this.handleChange}
                                    />
                                    <div className="remember_me"><input type="checkbox" id="remember_me"
                                                                        name="_remember_me"
                                                                        checked/>
                                        <label className="remember_me_text helper_text">Maradjak bejelentkezve</label>
                                    </div>

                                </label>

                                <div className="center_login">
                                    <Button className="button_color button_width" onClick={this.handleSubmit}
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
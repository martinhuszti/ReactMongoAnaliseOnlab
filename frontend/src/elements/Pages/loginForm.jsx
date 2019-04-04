import './css/news.css';
import './css/loginForm.css'
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { UncontrolledAlert } from 'reactstrap';


class RegistrationForm extends Component {
    emptyUser = {
        neptun: '',
        password: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyUser,
            checklook: false,
            visible: false,

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
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item: item });
    }

    handleCheck() {
        console.log('NemCsekked');
        this.setState({ checklook: !this.state.checklook });
        console.log(this.state.checklook);
    }

    handleKeyPress(e) {

        console.log('Nem nyomtam semmit');
        if (e.key === 'Enter') {
            console.log('Nem nyomtam enter');
            this.handleSubmit(e);
        }
    }

    alertboxshow() {
        this.setState({ visible: true });
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/loginUser', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        }).then(response => {
            if (response.ok) { return response.json() }

            else {
                this.alertboxshow();
                throw new Error("Sikertelen bejelentkezés");
            }
            //throw new Error('Sikertelen bejelentkezés!')
        }
        )
            .then(json => {

                console.log(json);

                if (this.state.checklook === true) {
                    localStorage.setItem("loggedin", "true");
                    localStorage.setItem("id", json.id);
                }

                sessionStorage.setItem("loggedin", "true");
                sessionStorage.setItem("id", json.id);

                alert("Sikeresen bejelentkezve!");
                this.props.history.push('/LoggedIn');

            })

    }

    render() {
        const { item } = this.state;
        return (
            <div id="login_placeholder">
                <div id="placeholder_header" />
                <div id="login_width">

                    <UncontrolledAlert isOpen={this.state.visible} color="danger" toggle={this.onDismiss} >
                        Sikertelen bejelentkezés! Rossz neptun kód vagy jelszó.
                        </UncontrolledAlert>

                    <div className="news news_head rounded_corners_top">
                        <p className="login_text">Bejelentkezés</p>
                    </div>
                    <div className="news news_body login_color rounded_corners_bottom">
                        <div className="center_login">
                            <form Submit={this.handleSubmit}>
                                <label className="center_login">
                                    <div className="helper_text">Neptun kód:</div>
                                    <input className="login_color loginform_text" type="text"
                                        name="neptun"
                                        id="neptun"
                                        value={item.neptun || ''}
                                        onChange={this.handleChange}
                                    />

                                    <div className="helper_text ">Jelszó:</div>
                                    <input className="login_color loginform_pass"
                                        type="password"
                                        name="password"
                                        id='password'
                                        value={item.password || ''}
                                        onChange={this.handleChange}
                                    />
                                    <div className="remember_me">
                                        <input type="checkbox" id="remember_me"
                                            name="_remember_me" onClick={this.handleCheck} />
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
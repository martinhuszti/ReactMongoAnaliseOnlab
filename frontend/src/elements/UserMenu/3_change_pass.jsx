import React, {Component} from "react";
import "./css/change_pass.css";
import {Alert, Button} from "reactstrap";
import Eye from "@material-ui/icons/Visibility";
import EyeSlash from "@material-ui/icons/VisibilityOff";

class ChangePassword extends Component {

    passwObj = {
        "id": "",
        "newPassword": "",
        "oldPassword": "",

    };

    constructor(props) {
        super(props);

        this.state = {
            color: true,
            textPass: "password",
            passwObj: this.passwObj,
            btnDisabled: false,
            alertVisible: false,
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.showPass = this.showPass.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleBtn = () => {
        this.setState(prevState => ({
            btnDisabled: !prevState.btnDisabled,
            alertVisible: !prevState.alertVisible,
        }));
    };

    async handleSubmit(event) {
        event.preventDefault();
        this.toggleBtn();

        const {passwObj} = this.state;


        const matches = passwObj.newPassword === passwObj.cPassword;
        if (matches === false) {
            alert("Nem egyeznek a jelszavak");
        } else {

            passwObj.id = sessionStorage.getItem("id");
            await fetch("/api/users/password", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(passwObj)
            }).then((resp) => {
                window.setTimeout(() => {
                    this.toggleBtn();

                }, 2000);

                return resp.text();
            });


        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let passwObj = {...this.state.passwObj};
        passwObj[name] = value;
        this.setState({passwObj});
    }


    showPass() {

        this.setState({color: !this.state.color});
    }

    render() {
        let btnClass = this.state.color ? <EyeSlash/> : <Eye/>;
        let passStyle = this.state.color ? "password" : "text";
        const {btnDisabled} = this.state;


        const {passwObj} = this.state;

        return (
            <div>
                <ul className="pass_list">
                    <li>
                        <span>Régi jelszó:</span>
                        <i className="fa fa-eye"/>
                        <input
                            required
                            className="pass_newpass"
                            type="password"
                            name="oldPassword"
                            id="oldPassword"

                            value={passwObj.oldPassword || ""}
                            onChange={this.handleChange}

                        />

                    </li>


                    <li>
                        <span>Új jelszó: </span>
                        <input
                            required
                            className="pass_newpass"
                            type={passStyle}
                            id="newPassword"
                            name="newPassword"
                            onChange={this.handleChange}
                            value={passwObj.newPassword || ""}
                        />

                        <div onClick={this.showPass} className="pass_lookup_button">{btnClass}</div>
                    </li>
                    <li>
                        <span>Megerősítés:</span>
                        <input
                            required
                            className="pass_newpass"
                            type="password"
                            id="cPassword"
                            name="cPassword"
                            onChange={this.handleChange}
                            value={passwObj.cPassword || ""}
                        />
                    </li>
                </ul>

                <div className="pass_flex_display">
                    <div className="pass_short_area"/>

                    <Button disabled={btnDisabled} type={"submit"} className="button_color button_width"
                            onClick={this.handleSubmit}
                            variant="primary">
                        <p className="button_width">Jelszó változtatás</p></Button>


                    <Alert isOpen={this.state.alertVisible} toggle={this.closeAlert} color="success">
                        Jelszóváltoztatás megtörtént
                    </Alert>

                    <div className="pass_long_area"/>
                </div>

            </div>


        )
    }
}

export default ChangePassword;

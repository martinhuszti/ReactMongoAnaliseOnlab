import React, {Component} from "react";
import {Alert, Button, Form, FormGroup, Input, Label} from "reactstrap";
import "./css/extra_person.css";

class ExtraAdmin extends Component {

    createdUser = {
        name: "",
        neptun: "",
        email: "",
        password: "default",
        role: "admin",


    };
    createdAdmin = {
        neptun: "",
    };

    constructor(props) {
        super(props);

        this.state = {
            createdUser: this.createdUser,
            createdAdmin: this.createdAdmin,
            items: [],
            redirect: false,
            alertVisible: false,
            btnDisabled: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let createdUser = {...this.state.createdUser};
        createdUser[name] = value;
        this.setState({createdUser});
        this.setState({
            createdAdmin: {
                neptun: this.state.createdUser.neptun,
            }
        });
    }

    async adduser() {
        const {createdUser} = this.state;

        await fetch("/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createdUser)
        });
    }

    async addadmin() {

        const {createdAdmin} = this.state;
        await fetch("/api/admins", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createdAdmin)
        });


    }

    toggleBtn = () => {
        this.setState(prevState => ({
            btnDisabled: !prevState.btnDisabled,
            alertVisible: !prevState.alertVisible,
        }));
    };


    handleSubmit(event) {
        event.preventDefault();
        this.toggleBtn();

        this.setState({
            createdAdmin: {
                neptun: this.state.createdUser.neptun,
            }
        });

        this.adduser(event);
        this.addadmin(event);
        window.setTimeout(() => {
            this.toggleBtn();

        }, 2000);
    }


    render() {

        const {createdUser} = this.state;
        const {btnDisabled} = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Név:</Label>
                        <Input required className="extra_info" type="text" name="name" id="name"
                               value={createdUser.name || ""} onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="head">Neptun:</Label>
                        <Input required className="extra_info" type="text" name="neptun" id="neptun"
                               value={createdUser.neptun || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">E-mail:</Label>
                        <Input required className="extra_info" type="text" name="email" id="email"
                               value={createdUser.email || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button disabled={btnDisabled} variant={"success"} color="primary"
                                type="submit">Regisztrálás</Button>

                    </FormGroup>

                </Form>

                <Alert isOpen={this.state.alertVisible} toggle={this.closeAlert} color="success">
                    Sikeresen felveted a számonkérést!
                </Alert>

            </div>
        );
    }
}

export default ExtraAdmin;

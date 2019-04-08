import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import './css/extra_person.css'

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
    }

    constructor(props) {
        super(props);

        this.state = {
            createdUser: this.createdUser,
            createdAdmin:this.createdAdmin,
            items: [],
            redirect: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let createdUser = { ...this.state.createdUser };
        createdUser[name] = value;
        this.setState({ createdUser });
        this.setState({
            createdAdmin: {
                neptun: this.state.createdUser.neptun,
            }
        })
    }

    async adduser(event) {
        const { createdUser } = this.state;

        await fetch('/adduser', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createdUser)
        });

        alert("Sikeres regisztáció!");
        console.log("új felhasználó")
    }
    async addadmin(event) {

        const { createdAdmin } = this.state;
        await fetch('/addadmin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createdAdmin)
        });

        console.log("új diák")
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            createdAdmin: {
                neptun: this.state.createdUser.neptun,
            }
        })
        console.log(this.state.createdUser)
        console.log(this.state.createdAdmin)

        this.adduser(event);
        this.addadmin(event);
    }


    render() {

        const { createdUser } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Név:</Label>
                        <Input className="extra_info" required type="text" name="name" id="name"
                            value={createdUser.name || ''} onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="head">Neptun:</Label>
                        <Input className="extra_info" required type="text" name="neptun" id="neptun"
                            value={createdUser.neptun || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">E-mail:</Label>
                        <Input className="extra_info" required type="text" name="email" id="email"
                            value={createdUser.email || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button variant={'success'} color="primary" type="submit">Regisztrálás</Button>

                    </FormGroup>

                </Form>

            </div>
        );
    }
}

export default ExtraAdmin;
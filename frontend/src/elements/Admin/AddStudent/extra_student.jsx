import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import './extra_person.css'

class ExtraStudent extends Component {

    createdUser = {
        "name" :"",
        "neptun" : "",
        "email" : "",
        "password" : "default",
        "role" : "student",
    }

    constructor(props) {
        super(props);

        this.state = {
            createdUser: this.createdUser,
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
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { createdUser } = this.state;

        await fetch('/adduser', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createdUser)
        })

        alert("Sikeres regisztáció!")
        console.log("feltöltés befejeződött")
    }


    render() {

        const { createdUser } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Diák neve:</Label>
                        <Input className="extra_info" type="text" name="name" id="name"
                            value={createdUser.name || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">E-mail:</Label>
                        <Input className="extra_info" type="text" name="email" id="email"
                            value={createdUser.email || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    {/*<FormGroup>*/}
                        {/*<Label for="head">Gyakorlat vezető: //(Itt majd kiválasztással kellene) </Label>*/}
                        {/*<Input className="extra_info" type="text" name="gyakvez_name" id="gyakvez_name"*/}
                            {/*value={createdUser.text || ''} onChange={this.handleChange}*/}
                        {/*/>*/}
                    {/*</FormGroup>*/}

                    <FormGroup>
                        <Label for="head">Neptun:</Label>
                        <Input className="extra_info" type="text" name="neptun" id="neptun"
                            value={createdUser.neptun || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button variant={'success'} color="primary" type="submit">Regisztrálás</Button>

                    </FormGroup>

                    <label for="file-upload" class="extra-file-upload">
                        Tallózás...
</label>
                    <input class="extra-input"id="file-upload" type="file" accept=".xls,.xlsx" onChange={ (event) => this.uploadFile(event) }/>
                </Form>

            </div>
        );
    }
}

export default ExtraStudent;

import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import AsyncSelect from 'react-select/lib/Async';
import './extra_person.css'

class ExtraStudent extends Component {

    createdUser = {
        name: "",
        neptun: "",
        email: "",
        password: "default",
        role: "student",
        gyakvez_id: "",

    };


    constructor(props) {
        super(props);

        this.state = {
            createdUser: this.createdUser,
            redirect: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectGyak = this.selectGyak.bind(this);

    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let createdUser = { ...this.state.createdUser };
        createdUser[name] = value;
        this.setState({ createdUser });
    }

    selectGyak(gyakvez) {
        let createdUser = { ...this.state.createdUser };
        createdUser.gyakvez_id = gyakvez._id;
        this.setState({ createdUser });
        return gyakvez;
    }


    async handleSubmit(event) {
        event.preventDefault();
        const { createdUser } = this.state;

        await fetch('/adduser', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createdUser)
        });

        alert("Sikeres regisztáció!");
        console.log("feltöltés befejeződött")
    }


    render() {

        const getgyak = (inputValue, callback) => {

            fetch(`/getUsers`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                //body: JSON.stringify(item)

            }).then(response => response.json())
                .then(response => {
                    console.log(response);
                    callback(response);
                })
        };


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

                    <FormGroup>

                        <AsyncSelect
                            className="extra_info"
                            defaultOptions
                            loadOptions={getgyak}
                            getOptionLabel={option => option.neptun}
                            getOptionValue={option => option._id}
                            onChange={this.selectGyak}
                        />

                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button variant={'success'} color="primary" type="submit">Regisztrálás</Button>

                    </FormGroup>

                    <label for="file-upload" className="extra-file-upload">
                        Tallózás...
                    </label>
                    <input className="extra-input" id="file-upload" type="file" accept=".xls,.xlsx"
                        onChange={(event) => this.uploadFile(event)} />
                </Form>

            </div>
        );
    }
}

export default ExtraStudent;

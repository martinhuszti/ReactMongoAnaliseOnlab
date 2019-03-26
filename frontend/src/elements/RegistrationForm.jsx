import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class RegistrationForm extends Component {


    handleSubmit = () => {

        let usrs = {
            "firstName": "OCUW5I",
            "lastName": "OCUW5I",
            "neptun": "OCUW5I",
            "password": "OCUW5I",
            "email": "OCUW5I"
        }

        console.log('this is:', this);

        fetch('/adduser', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(usrs)
        })


    }

    render() {

        return (
            <ButtonToolbar>
                <Button onClick={this.handleSubmit} variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </ButtonToolbar>
        );
    }
}


export default RegistrationForm;
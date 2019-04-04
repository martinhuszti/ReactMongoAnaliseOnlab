import React, {Component} from 'react';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import './css/extra_person.css'

class ExtraTeacher extends Component {

    emptyItem = {
        title: ''

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem,
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
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/addteacher', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
    }


    render() {

        const {item} = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Név:</Label>
                        <Input className="extra_info" type="text" name="title" id="title"
                               value={item.title || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">E-mail:</Label>
                        <Input className="extra_info" type="text" name="text" id="text"
                               value={item.text || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Csoport:</Label>
                        <Input className="extra_info" type="text" name="text" id="text"
                               value={item.text || ''} onChange={this.handleChange}
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

export default ExtraTeacher;

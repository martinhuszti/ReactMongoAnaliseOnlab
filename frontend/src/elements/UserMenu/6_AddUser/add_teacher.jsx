import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import './css/extra_person.css'
import Select from "react-select";



const fruits = [
    { label: 'Banana', value: '1' },
    { label: 'Apple', value: '2' },
    { label: 'Mango', value: '3' },
    { label: 'Goa', value: '4' },
    { label: 'Grapes', value: '5' },
    { label: 'Pine Apple', value: '6' },
];


class ExtraTeacher extends Component {

    emptyItem = {
        title: ''

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem,
            crazy: false,
      value: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleSelectChange = this.handleSelectChange.bind(this);

    }
    handleSelectChange(value) {
        console.log('You have selected: ', value);
        this.setState({ value });
      }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/addteacher', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
    }
    handleMultiChange(option) {
        this.setState(state => {
          return {
            multiValue: option
          };
        });
      }


    render() {
 
        const { item } = this.state;
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

                    <Select multi joinValues value={this.state.value} placeholder="Select your favourite(s)" options={fruits} onChange={this.handleSelectChange} />

                    <FormGroup id="buttonFrom">
                        <Button variant={'success'} color="primary" type="submit">Regisztrálás</Button>

                    </FormGroup>

                </Form>

            </div>
        );
    }
}

export default ExtraTeacher;

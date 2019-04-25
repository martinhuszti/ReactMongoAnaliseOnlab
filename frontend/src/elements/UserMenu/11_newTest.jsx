import React, { Component } from 'react';

import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import { Form, FormGroup, Input, Label } from 'reactstrap';



const optionsTest = [
    { value: 'ZH', label: 'Zárthelyi dolgozat' },
    { value: 'VIZSGA', label: 'Vizsga' },
    { value: 'POTZH', label: 'Pót zárthelyi dolgozat' }
];

class NewTest extends Component {




    emptyTest = {
        title: '',
        type: '',
        time: '',

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyTest,
            items: [],
            options: optionsTest,
            selectedOption:"ZH",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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

        await fetch('/addtest', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
    }

    optionChange = (selectedOption) => {

        this.setState({
            item: {
                type: selectedOption.value,
            }
        });
        console.log(this.state.item.type)
    };


    render() {


        const { item } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Számonkérés neve:</Label>
                        <Input className="newsP_title" type="text" name="title" id="title"
                            value={item.title || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <Label for="head">Típus:</Label>
                    <Select
                        value={item.selectedOption}
                        onChange={this.optionChange}
                        className="addP_select"
                        options={this.state.options}
                        placeholder="Típus"
                    />
                    <FormGroup>
                        <Label for="head">Időpont:</Label>
                        <Input className="newsP_title" type="text" name="time" id="time"
                            value={item.time || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button variant={'success'} color="primary" type="submit">Feltöltés</Button>
                    </FormGroup>

                </Form>
            </div>
        );
    }
}

export default NewTest;

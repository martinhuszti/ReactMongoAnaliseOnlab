import React, { Component } from 'react';
import './css/news_publication.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class new_Labor extends Component {
    emptyLab = {
        title: '',
        place: '',
        time: '',

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyLab,
            items: [],
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

        await fetch('/api/labors', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
    }

    render() {
        const { item } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Gyakorlat neve:</Label>
                        <Input className="newsP_title" type="text" name="title" id="title"
                            value={item.title || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Hely:</Label>
                        <Input className="newsP_title" type="text" name="place" id="place"
                            value={item.place || ''} onChange={this.handleChange}
                        />
                    </FormGroup>
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
        )
    }
}

export default new_Labor;

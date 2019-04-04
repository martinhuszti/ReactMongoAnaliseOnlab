import React, {Component} from 'react';
import './css/news_publication.css';
import Button from 'react-bootstrap/Button';
import {Form, FormGroup, Input, Label} from 'reactstrap';

class News_Publication extends Component {
    emptyItem = {
        title: '',
        text: ''

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem,
            items: [],
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

        await fetch('/addnews', {
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
                        <Label for="head">Hír címe</Label>
                        <Input className="newsP_title" type="text" name="title" id="title"
                               value={item.title || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Hír szövege</Label>
                        <textarea className="newsP_textarea" type="text" name="text" id="text"
                                  value={item.text || ''} onChange={this.handleChange}
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

export default News_Publication;

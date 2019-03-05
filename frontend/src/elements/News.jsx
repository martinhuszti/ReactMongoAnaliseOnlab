import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {Container, Form, FormGroup, Input, Label} from 'reactstrap';


const thisIsMyCopy = '<p>copy copy copy <strong>strong copy</strong></p>';


function SingleNews({match}) {
    return (
        <div>
            <h2>User: {match.params.singlenews}</h2>
        </div>
    );
}


class Class extends Component {

    emptyItem = {
        title: '',
        text: ''

    };

    constructor(props) {
        super(props);

        this.state={
            item: this.emptyItem,
            items:[]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
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
        })

        console.log("feltöltés befejeződött")
    }

    async refreshPage(event){
        event.preventDefault();
        await fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({items}))

        console.log("betöltés befejeeződött")
    }

    render() {

        const {item} = this.state;

        return (
            <div id="placeholder_news">
                <div id="placeholder_header"/>
                <div id="width_class">

                    <div className="news news_head">
                        <a className="news_text" href="">Hírek</a>
                    </div>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="head">Hír címe</Label>
                            <Input type="text" name="title" id="title"
                                   value={item.title || ''} onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="head">Hír szövege</Label>
                            <Input type="text" name="text" id="text"
                                   value={item.text || ''} onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup id="buttonFrom">
                            <Button variant={'success'}color="primary" type="submit">Feltöltés</Button>
                            <Button variant={'info'}color="primary" onClick={this.refreshPage} >Frissítés</Button>
                        </FormGroup>

                    </Form>

                    <div className="news news_body">
                        <ul>
                            {this.state.items.map(item => <li key={item.id}>
                                Hír címe: {item.title}
                            <br/>
                                Hír szövege: {item.text}<br/><br/>
                            </li>)}
                        </ul>

                    </div>
                </div>
            </div>

        )
    }


}


export default Class;
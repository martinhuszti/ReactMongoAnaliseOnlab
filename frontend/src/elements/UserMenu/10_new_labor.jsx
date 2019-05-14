import React, {Component} from "react";
import "./css/news_publication.css";
import {Alert, Button, Form, FormGroup, Input, Label} from "reactstrap";

class newLabor extends Component {
    emptyLab = {
        title: "",
        place: "",
        time: "",

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyLab,
            items: [],
            btnDisabled: false,
            alertVisible: false,
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
        this.toggleBtn();
        const {item} = this.state;
        await fetch("/api/labors", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });
        window.setTimeout(() => {
            this.toggleBtn();
        }, 2000);
    }

    toggleBtn = () => {
        this.setState(prevState => ({
            btnDisabled: !prevState.btnDisabled,
            alertVisible: !prevState.alertVisible,
        }));
    };

    render() {
        const {item} = this.state;
        const {btnDisabled} = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Gyakorlat neve:</Label>
                        <Input required className="newsP_title" type="text" name="title" id="title"
                               value={item.title || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Hely:</Label>
                        <Input required className="newsP_title" type="text" name="place" id="place"
                               value={item.place || ""} onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="head">Időpont:</Label>
                        <Input required className="newsP_title" type="text" name="time" id="time"
                               value={item.time || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button disabled={btnDisabled} variant={"success"} color="primary"
                                type="submit">Feltöltés</Button>
                    </FormGroup>
                </Form>
                <Alert isOpen={this.state.alertVisible} toggle={this.closeAlert} color="success">
                    Sikeresen felveted a számonkérést!
                </Alert>
            </div>
        )
    }
}

export default newLabor;

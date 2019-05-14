import React, {Component} from "react";

import Select from "react-select";
import {Alert, Button, Form, FormGroup, Input, Label} from "reactstrap";


const optionsTest = [
    {value: "ZH", label: "Zárthelyi dolgozat"},
    {value: "VIZSGA", label: "Vizsga"},
    {value: "POTZH", label: "Pót zárthelyi dolgozat"}
];

class NewTest extends Component {

    emptyTest = {
        title: "",
        time: "",
        creator: "",

    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyTest,
            examType: "",
            items: [],
            options: optionsTest,
            selectedOption: "ZH",
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

        var exam = {
            title: this.state.item.title,
            type: this.state.examType,
            time: this.state.item.time,
            creator: sessionStorage.getItem("id")

        };


        await fetch("/api/exams/tests", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(exam)
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

    optionChange = (selectedOption) => {

        this.setState({
            examType: selectedOption.value,
        });

    };


    render() {


        const {item} = this.state;
        const {btnDisabled} = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Számonkérés neve:</Label>
                        <Input required className="newsP_title" type="text" name="title" id="title"
                               value={item.title || ""} onChange={this.handleChange}
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
        );
    }
}

export default NewTest;

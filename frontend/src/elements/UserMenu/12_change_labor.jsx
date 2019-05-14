import React, {Component} from "react";
import "./css/change_labor.css";
import {Alert, Button, Form, FormGroup, Label} from "reactstrap";
import Select from "react-select";


class ChangeLab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentsList: [],
            labors: [],
            gyak: "",
            id: "",
            btnDisabled: false,
            alertVisible: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(ev) {
        ev.preventDefault();
        this.toggleBtn();

        let updateStudent = {
            gyak: this.state.gyak,
            id: this.state.id
        };
        fetch("/api/students/gyak", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updateStudent)
        });

        window.setTimeout(() => {
            this.toggleBtn();

        }, 2000);
    }


    componentWillMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch("/api/students?myGyakId=" + encodedValue)
            .then((response) => response.json())
            .then((studentsList) =>
                this.setState({studentsList}));


        fetch("/api/labors", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            //body: JSON.stringify(item)

        }).then((response) => response.json())
            .then((labors) => {
                this.setState({labors})
            });



    }

    toggleBtn = () => {
        this.setState(prevState => ({
            btnDisabled: !prevState.btnDisabled,
            alertVisible: !prevState.alertVisible,
        }));
    };


    render() {

        const {labors} = this.state;
        const {studentsList} = this.state;
        const {btnDisabled} = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Diák Neptun:</Label>
                        <Select
                            className="extra_info change_lab"
                            getOptionLabel={option => option.neptun}
                            getOptionValue={option => option.id}
                            options={studentsList}
                            placeholder="Diák"
                            onChange={opt => this.setState({
                                id: opt.id
                            })}
                        />
                        <Label for="head">Gyakorlat:</Label>
                        <Select
                            className="extra_info"
                            getOptionLabel={option => option.title}
                            getOptionValue={option => option.id}
                            options={labors}
                            placeholder="Gyakorlat"
                            onChange={opt => this.setState({
                                gyak: opt.id
                            })}
                        />

                    </FormGroup>
                    <FormGroup id="buttonFrom">
                        <Button disabled={btnDisabled} variant={"success"} color="primary" type="submit">Változtatás</Button>

                    </FormGroup>
                </Form>

                <Alert isOpen={this.state.alertVisible} toggle={this.closeAlert} color="success">
                    Sikeresen megtörtént a csere!
                </Alert>

            </div>
        );
    }
}

export default ChangeLab;

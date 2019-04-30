import React, { Component } from 'react';
import './css/change_labor.css';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import Select from "react-select";


class ChangeLab extends Component {

    changeStudent = {
        id: "",
        gyakid: "",
    }

    constructor(props) {
        super(props);

        this.state = {
            studentsList: [],
            labors: [],
            gyak: "",
            id: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(ev) {
        ev.preventDefault()
let updateStudent = {
    gyak:this.state.gyak,
    id: this.state.id
}
fetch(`/changestudent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateStudent)
});
    }


    componentWillMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch(`/getAllStudent?id=${encodedValue}`)
            .then(response => response.json())
            .then(studentsList =>
                this.setState({ studentsList }));


        fetch(`/api/labors`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            //body: JSON.stringify(item)

        }).then(response => response.json())
            .then(labors => {
                console.log(labors);
                this.setState({ labors })
            });

    }
    selectstudent(id) {
        this.setState({ id: id });
    }

    selectGyak(gyak) {

        this.setState({
            gyakid: gyak
        })
        console.log(gyak);
        console.log("gyak");
        return gyak;
    }

    render() {

        const { labors } = this.state;
        const { studentsList } = this.state;
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
                        <Label  for="head">Gyakorlat:</Label>
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
                        <Button variant={'success'} color="primary" type="submit">Változtatás</Button>

                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default ChangeLab;

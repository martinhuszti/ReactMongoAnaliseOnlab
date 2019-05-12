import React, {Component} from "react";
import {Alert, Button, Form, FormGroup, Input, Label} from "reactstrap";
import "./css/extra_person.css"
import AsyncSelect from "react-select/lib/Async";


class ExtraTeacher extends Component {

    createdTeacher = {
        name: "",
        neptun: "",
        labor_ids: [],
    };
    createdUser = {
        name: "",
        neptun: "",
        email: "",
        password: "default",
        role: "teacher",

    };
    all = {
        name: "",
        neptun: "",
        email: "",
        password: "default",
        role: "teacher",
        labor_ids: [],
    };

    constructor(props) {
        super(props);

        this.state = {
            all: this.all,
            value: [],
            visible: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.closeAlert = this.closeAlert.bind(this);

    }

    handleSelectChange(value) {

        this.setState({value});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let all = {...this.state.all};
        all[name] = value;
        this.setState({all});
    }

    async adduser() {
        let tempuser = {
            name: this.state.all.name,
            neptun: this.state.all.neptun,
            email: this.state.all.email,
            password: "default",
            role: "teacher",
        };

        await fetch("/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tempuser)
        });


        console.log("új felhasználó")
    }

    async addteacher() {
        console.log("tanár");

        let tampteacher = {
            name: this.state.all.name,
            neptun: this.state.all.neptun,
            labor_ids: this.state.all.labor_ids,
        };
        console.log("tanár2");
        console.log(tampteacher);
        await fetch("/api/teachers", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tampteacher)
        });

        console.log("feltöltés befejeződött");
        this.setState({visible: true});
        window.setTimeout(() => {
            this.setState({visible: false})
        }, 2000)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addteacher(event);
        this.adduser(event);
    }


    closeAlert() {
        this.setState({visible: false});
    }

    render() {

        const {all} = this.state;

        const getStudents = (inputValue, callback) => {

            fetch("/api/labors", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                //body: JSON.stringify(item)

            }).then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    callback(response);
                })
        };

        return (
            <div>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Név:</Label>
                        <Input className="extra_info" type="text" name="name" id="name"
                               value={all.name || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Neptun:</Label>
                        <Input className="extra_info" type="text" name="neptun" id="neptun"
                               value={all.neptun || ""} onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="head">E-mail:</Label>
                        <Input className="extra_info" type="text" name="email" id="email"
                               value={all.email || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <p>Melyik gyakorlatot tartja:</p>

                    <AsyncSelect

                        className="extra_info"
                        type="text"
                        name="students_ids"
                        id="students_ids"

                        placeholder={"Gyakorlat"}
                        isMulti
                        cacheOptions
                        defaultOptions
                        onChange={users => all.labor_ids = users.map(u => u.id)}
                        loadOptions={getStudents}
                        getOptionLabel={option => option.title}
                        getOptionValue={option => option.id}

                    />

                    <FormGroup id="buttonFrom">
                        <Button variant={"success"} color="primary" type="submit">Regisztrálás</Button>

                    </FormGroup>

                    <Alert isOpen={this.state.visible} toggle={this.closeAlert} color="success">
                        Sikeresen felveted a gyakorlatvezetőt!
                    </Alert>

                </Form>

            </div>
        );
    }
}

export default ExtraTeacher;

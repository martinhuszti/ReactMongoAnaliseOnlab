import React, {Component} from "react";
import {Alert, Button, Form, FormGroup, Input, Label} from "reactstrap";
import "./css/extra_person.css"
import AsyncSelect from "react-select/lib/Async";


class ExtraTeacher extends Component {

    createdTeacher = {
        name: "",
        neptun: "",
        laborIds: [],
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
        laborIds: [],
    };

    constructor(props) {
        super(props);

        this.state = {
            all: this.all,
            value: [],
            visible: false,
            btnDisabled: false,

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
    }

    async addteacher() {

        let tampteacher = {
            name: this.state.all.name,
            neptun: this.state.all.neptun,
            laborIds: this.state.all.laborIds,
        };
        await fetch("/api/teachers", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tampteacher)
        });

        this.setState({visible: true});
        window.setTimeout(() => {
            this.setState({visible: false})
        }, 2000)
    }

    toggleBtn = () => {
        this.setState(prevState => ({
            btnDisabled: !prevState.btnDisabled,
            alertVisible: !prevState.alertVisible,
        }));
    };

    handleSubmit(event) {
        event.preventDefault();
        this.toggleBtn();
        this.addteacher(event);
        this.adduser(event);
        window.setTimeout(() => {
            this.toggleBtn();

        }, 2000);
    }


    closeAlert() {
        this.setState({visible: false});
    }

    render() {

        const {all} = this.state;
        const {btnDisabled} = this.state;


        const getStudents = (inputValue, callback) => {

            fetch("/api/labors", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                //body: JSON.stringify(item)

            }).then((response) => response.json())
                .then((response) => {
                    callback(response);
                })
        };

        return (
            <div>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Név:</Label>
                        <Input required className="extra_info" type="text" name="name" id="name"
                               value={all.name || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Neptun:</Label>
                        <Input required className="extra_info" type="text" name="neptun" id="neptun"
                               value={all.neptun || ""} onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="head">E-mail:</Label>
                        <Input required className="extra_info" type="text" name="email" id="email"
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
                        onChange={users => all.laborIds = users.map(u => u.id)}
                        loadOptions={getStudents}
                        getOptionLabel={option => option.title}
                        getOptionValue={option => option.id}

                    />

                    <FormGroup id="buttonFrom">
                        <Button disabled={btnDisabled} variant={"success"} color="primary"
                                type="submit">Regisztrálás</Button>

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

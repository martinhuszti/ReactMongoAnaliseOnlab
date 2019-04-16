import React, {Component} from 'react';
import {Alert, Form, FormGroup, Input, Label} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import './css/extra_person.css'
import AsyncSelect from "react-select/lib/Async";



class ExtraTeacher extends Component {

    emptyTeacher = {
        name: '',
        neptun: '',
        labor_ids: [],
    };

    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyTeacher,
            crazy: false,
            value: [],
            visible: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.closeAlert = this.closeAlert.bind(this);

    }

    handleSelectChange(value) {
        console.log('You have selected: ', value);
        this.setState({value});
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

        console.log(item);

         await fetch('/addteacher', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });

        console.log("feltöltés befejeződött")
        this.setState({visible: true});
        window.setTimeout(()=>{
            this.setState({visible:false})
        },2000)
    }


    closeAlert() {
        this.setState({visible: false});
    }

    render() {

        const {item} = this.state;

        const getStudents = (inputValue, callback) => {

            fetch(`/getLabs`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                //body: JSON.stringify(item)

            }).then(response => response.json())
                .then(response => {
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
                               value={item.name || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Neptun:</Label>
                        <Input className="extra_info" type="text" name="neptun" id="neptun"
                               value={item.neptun || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <p>Melyik gyakorlatot tartja:</p>

                    <AsyncSelect

                        className="extra_info"
                        type="text"
                        name="students_ids"
                        id="students_ids"

                        placeholder={"Neptun"}
                        isMulti
                        cacheOptions
                        defaultOptions
                        onChange={users => item.labor_ids = users.map(u => u.id)}
                        loadOptions={getStudents}
                        getOptionLabel={option => option.title}
                        getOptionValue={option => option.id}

                    />

                    <FormGroup id="buttonFrom">
                        <Button variant={'success'} color="primary" type="submit">Regisztrálás</Button>

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

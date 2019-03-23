import React, { Component } from 'react';
import './add_person.css';
import Select from '../../../node_modules/react-select';
import ExtraAdmin from './AddStudent/extra_admin'
import {Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ExtraTeacher from './AddStudent/extra_teacher';

const options = [
    { value: 'Student', label: 'Diák' },
    { value: 'Teacher', label: 'Gyakorlatvezető / Előadó' },
    { value: 'Admin', label: 'Admin' }
];

class AddStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.emptyItem,
            redirect: false,
            value: 'a'
        };

    }


    state = {
        selectedOption:' Student'
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(selectedOption.value);
        if(selectedOption.value==='Admin'){
            this.item=<ExtraAdmin />
        }
        if(selectedOption.value==='Student'){
            this.item=null
        }
        if(selectedOption.value==='Teacher'){
            this.item=<ExtraTeacher />
        }
    }

    render() {
        const { selectedOption } = this.state;
        
        return (
            <div>
                <Select className="addP_select"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
               {this.item}
            </div>
        );
    }
}

export default AddStudent;

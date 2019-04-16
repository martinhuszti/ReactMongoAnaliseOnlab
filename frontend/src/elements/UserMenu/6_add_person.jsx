import React, {Component} from 'react';
import './css/add_person.css';
import Select from 'react-select';
import ExtraAdmin from './6_AddUser/add_admin'
import ExtraTeacher from './6_AddUser/add_teacher';
import ExtraStudent from './6_AddUser/add_student';

const optionsAdmin = [
    {value: 'Student', label: 'Diák'},
    {value: 'Teacher', label: 'Gyakorlatvezető / Előadó'},
    {value: 'Admin', label: 'Admin'}
];
const optionsTeacher = [
    {value: 'Student', label: 'Diák'}
];

class AddStudent extends Component {

    state = {
        selectedOption: ' Student'
    };

    constructor(props) {
        super(props);
        this.state = {
            items: this.emptyItem,
            redirect: false,
            value: 'a',
            options:optionsTeacher,
        };

    }
    componentDidMount(){
        const loginid=sessionStorage.getItem("id")
        console.log(loginid)
        fetch(`/getrole`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: loginid
        }).then(res => {
            return res.text()
    
        }).then(json => {
            if(json==="admin"){
                this.setState({options:optionsAdmin})
            }
            if(json==="teacher"){
                this.setState({options:optionsTeacher})
            }
        })
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(selectedOption.value);
        if (selectedOption.value === 'Admin') {
            this.item = <ExtraAdmin/>
        }
        if (selectedOption.value === 'Student') {
            this.item = <ExtraStudent/>
        }
        if (selectedOption.value === 'Teacher') {
            this.item = <ExtraTeacher/>
        }
    };

    render() {
        const {selectedOption} = this.state;

        return (

            <div>
                <p>Felhasználó fevétele:</p>
                <Select className="addP_select"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.state.options}
                        placeholder="Típus"
                />
                {this.item}
            </div>
        );
    }
}

export default AddStudent;

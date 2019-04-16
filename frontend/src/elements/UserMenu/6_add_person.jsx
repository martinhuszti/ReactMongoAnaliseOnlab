import React, {Component} from 'react';
import './css/add_person.css';
import Select from 'react-select';
import ExtraAdmin from './6_AddUser/add_admin'
import ExtraTeacher from './6_AddUser/add_teacher';
import ExtraStudent from './6_AddUser/add_student';

const options = [
    {value: 'Student', label: 'Diák'},
    {value: 'Teacher', label: 'Gyakorlatvezető / Előadó'},
    {value: 'Admin', label: 'Admin'}
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
            value: 'a'
        };

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
                        options={options}
                        placeholder="Típus"
                />
                {this.item}
            </div>
        );
    }
}

export default AddStudent;

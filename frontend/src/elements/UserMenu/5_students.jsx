import React, {Component} from 'react';
import './css/list_student.css';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Select from "react-select";

const optionsTest = [
    {value: 'ZH', label: 'Zárthelyi dolgozat'},
    {value: 'VIZSGA', label: 'Vizsga'},
    {value: 'POTZH', label: 'Pót zárthelyi dolgozat'}
];

class ListStudents extends Component {


    emptyLabor = {
        studentids: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            studentsList: [],
            newExamModalopen: false,
        };
        this.toggleExamModal = this.toggleExamModal.bind(this)

    }

    toggleExamModal() {
        this.setState(prevState => ({
            newExamModalopen: !prevState.newExamModalopen
        }));
    }

    componentDidMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));

        fetch(`/getAllStudent?id=${encodedValue}`)
            .then(response => response.json())
            .then(studentsList =>
                this.setState({studentsList}));


        console.log("betöltés befejeeződött")
    }


    render() {
        const { studentsList } = this.state;
        const { newExamModalopen } = this.state;


        return (
            <div>

                {/*uj zh beírása*/}
                <Modal isOpen={newExamModalopen} className="newExamModal" toggle={this.toggleExamModal}>
                    <ModalHeader toggle={this.toggleExamModal}>Új jegy bírása</ModalHeader>
                    <ModalBody>

                        <form onSubmit={this.handleSubmit}>

                            <h5>Diák</h5>
                            <Select
                                className="select-neptun"
                                getOptionLabel={option => option.neptun}
                                getOptionValue={option => option.id}
                                onChange={this.handleChange}
                                options={studentsList}
                                placeholder="Neptun"
                            />

                            <br/>

                            <h5>Számonkérés</h5>
                            <Select
                                className="addP_select"
                                options={optionsTest}
                                placeholder="Típusa"
                            />

                            <div className="container">
                                <div className="row">

                                    <div className="col-6">
                                        <h5>Pontszám</h5>
                                        <input type="number"/>
                                    </div>

                                    <div className="col-6">
                                        <h5>Jegy</h5>
                                        <input type="number"/>
                                    </div>
                                </div>
                            </div>


                        </form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleExamModal}>Felvétel</Button>{' '}
                        <Button color="danger" onClick={this.toggleExamModal}>Mégsem</Button>
                    </ModalFooter>
                </Modal>

                <h1>Diákok (Fejlesztés alatt)
                    <Button color="danger" className="delete-button">Diák Törlése</Button>
                    <Button color="warning" className="delete-button">Jegy módosítása</Button>

                    <Button color="success" className="delete-button"
                            onClick={this.toggleExamModal}>Új jegy beírása</Button>
                </h1>
                <ul>
                    {studentsList.map(student => {
                        return <li key={student.id}>

                            {student.neptun}:


                            {/*<Select className="student"*/}
                            {/*placeholder="Típus"*/}
                            {/*/>*/}

                        </li>
                    })}
                </ul>

                <div className="student_element">
                    <span className="student_neptun">
                        NEPTUNA:
                    </span>
                    <div className="student_list">
                        <div className="student_spec">
                        <span>
                            ZH1
                        </span>
                            <span>
                            89 pont
                        </span>
                            <span>
                            4
                        </span>
                        </div>
                        <div className="student_spec">
                        <span>
                            ZH1
                        </span>
                            <span>
                            89 pont
                        </span>
                            <span>
                            4
                        </span>
                        </div>
                        <div className="student_spec">
                        <span>
                            ZH1
                        </span>
                            <span>
                            89 pont
                        </span>
                            <span>
                            4
                        </span>
                        </div>
                        <div className="student_spec">
                        <span>
                            ZH1
                        </span>
                            <span>
                            89 pont
                        </span>
                            <span>
                            4
                        </span>
                        </div>
                    </div>
                </div>
                <div className="student_element">
                        <span className="student_neptun">
                            NEPTUNA:
                        </span>
                    <div className="student_list">
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                89 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                89 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                89 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                89 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                    </div>
                </div>
                <div className="student_element">
                        <span className="student_neptun">
                            NEPTUNA:
                        </span>
                    <div className="student_list">
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                89 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                89 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                89 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                        <div className="student_spec">
                            <span>
                                ZH1
                            </span>
                            <span>
                                189 pont
                            </span>
                            <span>
                                4
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ListStudents;

import React, {Component} from 'react';
import './css/list_student.css';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Select from "react-select";

class ListStudents extends Component {


    emptyExam = {
        score: '',
        mark: '',

    };

    constructor(props) {
        super(props);
        this.state = {
            studentsList: [],
            emptyExam: this.emptyExam,
            newExamModalopen: false,
            studentId: '',
            examType: '',
        };

        //bindings
        this.handleChange = this.handleChange.bind(this);
        this.toggleExamModal = this.toggleExamModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleExamModal() {

        this.setState(prevState => ({
            newExamModalopen: !prevState.newExamModalopen
        }));
    }

    componentDidMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch(`/getalltest`)
            .then(response => response.json())
            .then(examList =>
                this.setState({examList}));


        setTimeout(
            function () {
                console.log(this.state.examList);
                console.log("this.state.examList");
            }
                .bind(this),
            3000
        );


        fetch(`/getAllStudent?id=${encodedValue}`)
            .then(response => response.json())
            .then(studentsList =>
                this.setState({studentsList}));

    }

    handleChange(e) {
        const {emptyExam} = this.state;
        emptyExam[e.target.name] = e.target.value;
        this.setState(emptyExam)
    }

    handleSubmit(event) {
        event.preventDefault();
        const {studentId} = this.state;
        const {emptyExam} = this.state;
        const {examType} = this.state;


        console.log(this.state.emptyExam);
        fetch(`/addNewExam?studentId=${studentId}&examType=${examType}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(emptyExam)
        });

        this.toggleExamModal();
    }

    render() {
        const {studentsList} = this.state;
        const {newExamModalopen} = this.state;
        const {emptyExam} = this.state;
        const {examList} = this.state;

        return (
            <div>

                {/*uj zh beírása*/}
                <Modal isOpen={newExamModalopen} className="newExamModal" toggle={this.toggleExamModal}>
                    <ModalHeader toggle={this.toggleExamModal}>Új jegy bírása</ModalHeader>
                    <ModalBody>

                        <Form onSubmit={this.handleSubmit}>

                            <h5>Számonkérés</h5>
                            <Select
                                className="select-zh"
                                getOptionLabel={option => option.title}
                                getOptionValue={option => option.id}
                                options={examList}
                                placeholder="Számonkérés"
                                onChange={opt => this.setState({
                                    examType: opt.id
                                })}
                            />
                            <br/>

                            <h5>Diák</h5>
                            <Select
                                className="select-neptun"
                                getOptionLabel={option => option.neptun}
                                getOptionValue={option => option.id}
                                options={studentsList}
                                placeholder="Neptun"
                                onChange={opt => this.setState({studentId: opt.id,})}
                            />

                            <br/>

                            <br/>

                            <div className="container">
                                <div className="row">

                                    <FormGroup className="col-6">
                                        <Label for="pontszam"><h5>Pontszám</h5></Label>
                                        <Input type="number" name="score" id="pontszam" value={emptyExam.score || ''}
                                               placeholder="" onChange={this.handleChange}/>
                                    </FormGroup>

                                    <FormGroup className="col-6">
                                        <Label for="mark"><h5>Jegy</h5></Label>
                                        <Input type="number" name="mark" id="mark" placeholder=""
                                               value={emptyExam.mark || ''}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>

                            </div>


                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" tpye="submit" onClick={this.handleSubmit}>Felvétel</Button>{' '}
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
                    {studentsList.map(student =>
                        <li key={student.id}>

                            {student.neptun}:

                            {student.exams.map(exam =>
                                <li key={exam.id}>{exam.type} {exam.score} {exam.mark}</li>)
                            }

                        </li>
                    )}
                </ul>

               {/* < div
                    className="student_element">
                            < span
                                className="student_neptun">
                            NEPTUNA
                    :
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
                </div>*/}

            </div>
        )
            ;
    }
}

export default ListStudents;

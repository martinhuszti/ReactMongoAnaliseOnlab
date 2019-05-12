import React, {Component} from "react";
import "./css/list_student.css";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "react-select";

class ListStudents extends Component {


    emptyExam = {
        score: "",
        mark: "",

    };

    constructor(props) {
        super(props);
        this.state = {
            studentsList: [],
            emptyExam: this.emptyExam,
            newExamModalopen: false,
            studentId: "",
            examType: "",
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
        fetch(`/api/exams/tests`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
            .then(response => response.json())
            .then(examList =>
                this.setState({examList}));


        fetch(`/api/students?myGyakId=${encodedValue}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((studentsList) =>
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
        fetch(`/api/exams?studentId=${studentId}&examType=${examType}`, {
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
                                        <Input type="number" name="score" id="pontszam" value={emptyExam.score || ""}
                                               placeholder="" onChange={this.handleChange}/>
                                    </FormGroup>

                                    <FormGroup className="col-6">
                                        <Label for="mark"><h5>Jegy</h5></Label>
                                        <Input type="number" name="mark" id="mark" placeholder=""
                                               value={emptyExam.mark || ""}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>

                            </div>


                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" tpye="submit" onClick={this.handleSubmit}>Felvétel</Button>{" "}
                        <Button color="danger" onClick={this.toggleExamModal}>Mégsem</Button>
                    </ModalFooter>
                </Modal>

                <h1 className="students_title">Diákok
                    <Button color="success" className="delete-button"
                            onClick={this.toggleExamModal}>Új jegy beírása</Button>
                </h1>


                {studentsList.map((student) =>
                    <li className="student_element" key={student.id}>
                            < span className="student_neptun">
                                {student.neptun}:
                            </span>

                        <div className="student_list">

                            {student.exams.map((exam) =>
                                <div className="student_spec" key={exam.id}>
                                        <span>
                                            {exam.type}
                                        </span>
                                    <span>{exam.score} pont</span>
                                    <span>
                                            {exam.mark}
                                        </span></div>)
                            }
                        </div>
                    </li>
                )}


            </div>
        );

    }
}

export default ListStudents;

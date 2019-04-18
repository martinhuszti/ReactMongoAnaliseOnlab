import React, {Component} from 'react';
import './css/list_student.css';


class ListStudents extends Component {

    emptyLabor = {
        studentids: ''
    }

    emptyStudent = {
        id: '',
        neptun: '',
        examsids: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            studentsList: [],
        }
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
        return (
            <div>

                <h1>Student List</h1>
                <ul>
                    {this.state.studentsList.map(student => {
                        return <li key={student.id}>{student.neptun}</li>
                    })}
                </ul>

                {/*<div className="student_element">*/}
                {/*    <span className="student_neptun">*/}
                {/*        NEPTUNA:*/}
                {/*    </span>*/}
                {/*    <div className="student_list">*/}
                {/*    <div className="student_spec">*/}
                {/*        <span>*/}
                {/*            ZH1*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            89 pont*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            4*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <div className="student_spec">*/}
                {/*        <span>*/}
                {/*            ZH1*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            89 pont*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            4*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <div className="student_spec">*/}
                {/*        <span>*/}
                {/*            ZH1*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            89 pont*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            4*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <div className="student_spec">*/}
                {/*        <span>*/}
                {/*            ZH1*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            89 pont*/}
                {/*        </span>*/}
                {/*        <span>*/}
                {/*            4*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*    <div className="student_element">*/}
                {/*        <span className="student_neptun">*/}
                {/*            NEPTUNA:*/}
                {/*        </span>*/}
                {/*        <div className="student_list">*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                89 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                89 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                89 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                89 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="student_element">*/}
                {/*        <span className="student_neptun">*/}
                {/*            NEPTUNA:*/}
                {/*        </span>*/}
                {/*        <div className="student_list">*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                89 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                89 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                89 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div className="student_spec">*/}
                {/*            <span>*/}
                {/*                ZH1*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                189 pont*/}
                {/*            </span>*/}
                {/*            <span>*/}
                {/*                4*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

            </div>
        );
    }
}

export default ListStudents;

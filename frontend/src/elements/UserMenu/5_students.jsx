import React, {Component} from 'react';
import './css/list_student.css';


class ListStudents extends Component {

    emptyLabor = {
        studentids: ''
    }

    emptyStudent = {
        id:'',
        neptun: '',
        examsids: ''
    };

    componentDidMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));

        fetch(`/getAllStudent?id=${encodedValue}`)
            // .then(result => result.json())
            // .then(items => {
            //        console.log(items)
            //     }
            //
            // );

        console.log("betöltés befejeeződött")
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>



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

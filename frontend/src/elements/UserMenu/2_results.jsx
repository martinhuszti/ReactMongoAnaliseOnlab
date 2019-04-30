import React, { Component } from 'react';
import './css/result.css';
import {Button} from 'reactstrap';

class LoggedIn_Result extends Component {

    emptyExam = {
        score: '-',
        mark: '-',
        type: '-',

    };

    constructor(props) {
        super(props);
        this.state = {

            record: [this.emptyExam],

        };
        this.refreshMark = this.refreshMark.bind(this);
    }


    componentWillMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch(`/api/students/getById/?id=${encodedValue}`)
            .then(response => response.json())
            .then(student => {
                this.setState({ record: student.exams })

            }
            );

        setTimeout(
            function () {
                console.log(this.state.emptyExam);
                console.log("this.state.emptyExam");
            }
                .bind(this),
            2000
        );

    }

    refreshMark() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch(`/api/students/getById/?id=${encodedValue}`)
            .then(response => response.json())
            .then(emptyExam => {
                this.setState({ record: emptyExam.exams })

            }
            );
    }



    render() {
        const { record } = this.state;
        return (
            <div>
                <div className="result_margin">


                    <ul className="result_list result_height">
                        <li className="result_font all_bold">
                            <span>Számonkérés</span>
                            <span>Pont</span>
                            <span>Jegy</span>
                        </li>
                        {record.map(exam =>
                            <li className="result_font" key={exam.id}>
                                <span>
                                    {exam.type}
                                </span>
                                <span>{exam.score} pont</span>
                                <span>
                                    {exam.mark}
                                </span>  </li>)
                        }
                    </ul>

                    <ul className="result_informations">
                        <li>
                            <div id="square" className="green_square" />
                            <span>Aláírás megszerezve</span>
                        </li>
                        <li>
                            <div id="square" className="red_square" />
                            <span>Aláírás megtagadva</span>
                        </li>
                        <li>
                            <div id="square" className="blue_square" />
                            <span>Nem szerzett még aláírást</span>
                        </li>
                        <li className="result_placeholder" />
                        <li>
                            <div id="square" className="green_square" />
                            <span>Jegy megszerezve</span>
                        </li>
                        <li>
                            <div id="square" className="red_square" />
                            <span>Jegy megtagadva</span>
                        </li>
                        <li>
                            <div id="square" className="blue_square" />
                            <span>Nem szerzett még Jegyet</span>
                        </li>


                    </ul>
                </div>
                <div className="result_flex_markref">
                    <div>

                        <span className="result_endmark">Végső jegy:</span>
                        <span className="result_endmark result_number">{record[record.length - 1].mark}</span>
                    </div>
                    <div className="result_autobox">
                        <div className="result_halfbox" />
                        <Button className="button_color button_width result_refresh_button" onClick={this.refreshMark}
                            variant="primary">
                            <p className="button_width">Eredmény frissítése</p></Button>
                        <div className="result_twobox" />
                    </div>
                </div>
            </div>


        )
    }
}

export default LoggedIn_Result;

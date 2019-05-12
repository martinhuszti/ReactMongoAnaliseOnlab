import React, {Component} from "react";
import "./css/data.css";
import {BrowserRouter as Redirect} from "react-router-dom";

class LoggedInData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: "",
            isLoggedIn: "",
            gyak: [],
        };

    }

    componentDidMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch("/api/users/details?userId=" + encodedValue, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            //body: JSON.stringify(item)

        }).then(response => response.json())
            .then(response => {

                this.setState({item: response});
                this.setState({gyak: response.gyak});


            });

    };

    componentWillMount() {
        const sesslogged = sessionStorage.getItem("loggedin");

        if (sesslogged !== "true") {
            this.setState({
                isLoggedIn: "true"
            })
        }
    }

    render() {
        if (this.state.isLoggedIn === "false") {

            return <Redirect to="/LoginForm"/>
        }


        const {item} = this.state;
        const {gyak} = this.state;

        return (
            <div className="data_margin">

                <ul className="data_list">
                    <li className="data_font">
                        <span>Név:</span>
                        <span>{item.name}</span>
                    </li>
                    <li className="data_font">
                        <span>Neptun:</span>
                        <span>{item.neptun}</span>
                    </li>
                    <li className="data_font">
                        <span>E-mail:</span>
                        <span>{item.email}</span>
                    </li>
                    <li className="data_font">
                        <span>Utoljára bejelentkezve:</span>
                        <span>{item.last_login}</span>
                    </li>
                    <li className="data_font ">
                        <span>Regisztráció dátuma:</span>
                        <span>{item.registration_date}</span>
                    </li>

                    {gyak.map((item) => <li key={item.id}>
                        <li className="data_font data_top">
                            <span>Csoport:</span>
                            <span>{item.title}</span>
                        </li>
                        <li className="data_font">
                            <span>Hely:</span>
                            <span>{item.place}</span>
                        </li>
                        <li className="data_font">
                            <span>Idő:</span>
                            <span>{item.time}</span>
                        </li>
                    </li>)}


                </ul>
            </div>


        )
    }
}

export default LoggedInData;

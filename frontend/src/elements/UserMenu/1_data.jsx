import React, { Component } from 'react';
import './css/data.css';
import { BrowserRouter as Redirect } from "react-router-dom";

class LoggedIn_Data extends Component {
    userDetails = {

        neptun: null,
        name: null,
        email: null,
        last_login: null,
        registration_date: null,
        gyak: [this.userLabor],


    };
    userLabor = {
        title: null,
        place: null,
        time: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            isLoggedIn: '',
            gyak: [],
        };

    }

    componentDidMount() {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch(`/getDetails?id=${encodedValue}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            //body: JSON.stringify(item)

        }).then(response => response.json())
            .then(response => {
                console.log(response);
                console.log("datarespond")
                this.setState({ item: response });
                this.setState({ gyak: response.gyak })
                console.log(this.state.gyak);
                setTimeout(function () {
                    console.log("kisliba")
                    console.log(this.state.item);

                    console.log(this.state.gyak);
                }.bind(this), 2000);


            });
        console.log("yes");
    };

    componentWillMount() {
        const sesslogged = sessionStorage.getItem("loggedin");

        if (sesslogged !== "true") {
            this.setState({
                isLoggedIn: "true"
            })
        }
    }

    fetchstudentgyak() {
        console.log(this.state.item.neptun)
        console.log("this.state.item.neptun")
        fetch(`/getstudentgyak`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: this.state.item.neptun
        }).then(res => {
            return res.json()

        }).then(json => {
            this.setState({ gyak: json });

        })

    }

    render() {
        if (this.state.isLoggedIn === "false") {
            console.log(this.state.isLoggedIn);
            return <Redirect to="/LoginForm" />
        }


        return (
            <div className="data_margin">
                <ul className="data_list">
                    <li className="data_font">
                        <span>Név:</span>
                        <span>{this.state.item.name}</span>
                    </li>
                    <li className="data_font">
                        <span>Neptun:</span>
                        <span>{this.state.item.neptun}</span>
                    </li>
                    <li className="data_font">
                        <span>E-mail:</span>
                        <span>{this.state.item.email}</span>
                    </li>
                    <li className="data_font">
                        <span>Utoljára bejelentkezve:</span>
                        <span>{this.state.item.last_login}</span>
                    </li>
                    <li className="data_font ">
                        <span>Regisztráció dátuma:</span>
                        <span>{this.state.item.registration_date}</span>
                    </li>

                    {this.state.gyak.map(item => <li key={item.id}>
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

export default LoggedIn_Data;

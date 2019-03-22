import React, {Component} from 'react';
import './loggedin_data.css';

class LoggedIn_Data extends Component {
    userDetails = {
        email: null,
        last_login: null,
        name: null,
        neptun: null,
        password: null,
        registration_date: null,
        role: null,
        _id: null,


    };

    constructor(props) {
        super(props);
        this.fetchData();

    }

    fetchData = () => {
        const encodedValue = encodeURIComponent(sessionStorage.getItem("id"));
        fetch(`/getDetails?id=${encodedValue}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            //body: JSON.stringify(item)

        }).then(response => response.json())
            .then(response => {
                this.userDetails = response;
                console.log(this.userDetails);
            })
        console.log("yes");
    }

    render() {
        return (
            <div className="data_margin">
                <ul className="data_list">
                    <li className="data_font">
                        <span>Név:</span>
                        <span>{this.userDetails.name}</span>
                    </li>
                    <li className="data_font">
                        <span>Neptun:</span>
                        <span>{this.userDetails.neptun}</span>
                    </li>
                    <li className="data_font">
                        <span>E-mail:</span>
                        <span>{this.userDetails.email}</span>
                    </li>
                    <li className="data_font">
                        <span>Utoljára bejelentkezve:</span>
                        <span>{this.userDetails.last_login}</span>
                    </li>
                    <li className="data_font">
                        <span>Regisztráció dátuma:</span>
                        <span>{this.userDetails.registration_date}</span>
                    </li>
                    <li className="data_font">
                        <span>Gyakorlatvezető:</span>
                        <span>{this.userDetails.registration_date}</span>
                    </li>
                </ul>
            </div>


        )
    }
}

export default LoggedIn_Data;

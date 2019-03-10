import React, { Component } from 'react';
import './loggedin_data.css';

class LoggedIn_Data extends Component{

    render(){
        return(
            <div className="data_margin">
                <ul className="data_list">
                <li className="data_font">
                    <span>Név:</span>
                    <span>asdasdasdasd</span>
                </li>
                <li className="data_font">
                    <span>Neptun:</span>
                    <span>asdasdasdasd</span>
                </li>
                <li className="data_font">
                    <span>E-mail:</span>
                    <span>asdasdasdasd</span>
                </li>
                <li className="data_font">
                    <span>Utoljára bejelentkezve:</span>
                    <span>asdasdasdasd</span>
                </li>
                <li className="data_font">
                    <span>Regisztráció dátuma:</span>
                    <span>asdasdasdasd</span>
                </li>
                </ul>
            </div>

            
        )
    }
}

export default LoggedIn_Data;

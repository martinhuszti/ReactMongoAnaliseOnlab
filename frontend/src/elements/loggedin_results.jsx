import React, { Component } from 'react';
import './loggedin_result.css';

class LoggedIn_Result extends Component{

    render(){
        return(
            <div className="data_margin">
                <ul className="data_list result_height">
                <li className="data_font all_bold">
                    <span>Számonkérés</span>
                    <span>Pont</span>
                    <span>Jegy</span>
                    <span>Megjegyzés</span>
                </li>
                <li className="data_font">
                    <span>ZH1:</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="data_font">
                    <span>ZH2:</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="data_font">
                    <span>PótZh1</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="data_font">
                    <span>PótZh2</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="data_font">
                    <span>Vizsga1</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                </ul>
            </div>

            
        )
    }
}

export default LoggedIn_Result;

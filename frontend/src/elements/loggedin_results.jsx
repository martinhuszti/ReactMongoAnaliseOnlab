import React, { Component } from 'react';
import './loggedin_result.css';

class LoggedIn_Result extends Component{

    render(){
        return(
            <div>
            <div className="result_margin">
            
                <ul className="result_list result_height">
                <li className="result_font all_bold">
                    <span>Számonkérés</span>
                    <span>Pont</span>
                    <span>Jegy</span>
                    <span>Megjegyzés</span>
                </li>
                <li className="result_font">
                    <span>ZH1:</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="result_font">
                    <span>ZH2:</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="result_font">
                    <span>PótZh1</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="result_font">
                    <span>PótZh2</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                <li className="result_font">
                    <span>Vizsga1</span>
                    <span>60</span>
                    <span>3</span>
                </li>
                </ul>
                
                <ul className="result_informations">
                <li >
                    <div id="square" className="green_square"></div>
                    <span>Aláírás megszerezve</span>
                </li>
                <li >
                    <div id="square" className="red_square"></div>
                    <span>Aláírás megtagadva</span>
                </li>
                <li >
                    <div id="square" className="blue_square"></div>
                    <span>Nem szerzett még aláírást</span>
                </li>
                <li className="result_placeholder"></li>
                <li >
                    <div id="square" className="green_square"></div>
                    <span>Jegy megszerezve</span>
                </li>
                <li >
                    <div id="square" className="red_square"></div>
                    <span>Jegy megtagadva</span>
                </li>
                <li >
                    <div id="square" className="blue_square"></div>
                    <span>Nem szerzett még Jegyet</span>
                </li>
                

                </ul>
                </div>
            </div>

            
        )
    }
}

export default LoggedIn_Result;

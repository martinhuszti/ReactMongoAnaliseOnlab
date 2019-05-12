import './css/informations.css';
import React, { Component } from 'react';

class Infomations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gyak: [],
        };



    }


    componentWillMount() {
        document.title = "Információ";
        fetch(`/api/labors`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },


        }).then(response => response.json())
            .then(gyak => this.setState({ gyak }))
    }


    render() {

        const { gyak } = this.state;
        return (
            <div id="placeholder_news">

                <div id="placeholder_header" />
                <div id="width_class">


                    <div className="news news_head">
                        <p className="news_text">Információ</p>
                    </div>
                    <div className="news news_body info_flex">
                        <div>
                            <span className="info_gyak">Gyakorlatok:</span>
                            
                            {gyak.map(item => <ul key={item.id}>
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
                            </ul>)}
                            
                        </div>
                        <div>
                            <span className="info_gyak">Előadások:</span>
                            <ul>
                            <li className="data_font data_top">
                                <span>Csoport:</span>
                                <span>A1,A2</span>
                            </li>
                            <li className="data_font">
                                <span>Hely:</span>
                                <span>Q1</span>
                            </li>
                            <li className="data_font">
                                <span>Idő:</span>
                                <span>Hétfő 19:10</span>
                            </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Infomations;

import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import React, { Component } from 'react';
import './requirements.css';

const PlaceString = 'Követelmények';

class Requirements extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
        this.refreshPage = this.refreshPage.bind(this);

    }

    async refreshPage(event) {
        event.preventDefault();
        await fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({items}))

        console.log("betöltés befejeeződött")
    }


    render() {

        const {item} = this.state;

        return (
            <div id="placeholder_news">
        <div id="placeholder_header"></div>
        <div id="width_class">

            <div class="news news_head">
                <p class="news_text" dangerouslySetInnerHTML={{ __html: PlaceString }}></p>
            </div>
            <div className="news news_body" >
            <div className="req_flex">
                <ul className="req_itemtext">
                    <li>
                    <span>Jelenlét:</span>
                    <p>asdasdasdasdsafasfsafasfasfasasdddddddasdnkasldkmfmsadklasmdassakdmasdmlasmdlkasmdlkasmdaskldmkasldmsakdmaslmdaslkdmaslkdmalskmdlasmdasdasdasdsafasmsakdmaslmdaslkdmaslkdmalskmdlasmdls</p>
                    </li>
                    <li>
                    <span>Aláírás:</span>
                    <p>asdasdasdasdsafasfsafasfasfasasdddddddasdnkasldkmfmsadklasmdassakdmasdmlasmdlkasmdlkasmdaskldmkasldmsakdmaslmdaslkdmaslkdmalskmdlasmdasdasdasdsafasmsakdmaslmdaslkdmaslkdmalskmdlasmdls</p>
                    </li>
                    <li>
                    <span>Vizsga:</span>
                    <p>asdasdasdasdsafasfsafasfasfasasdddddddasdnkasldkmfmsadklasmdassakdmasdmlasmdlkasmdlkasmdaskldmkasldmsakdmaslmdaslkdmaslkdmalskmdlasmdasdasdasdsafasmsakdmaslmdaslkdmaslkdmalskmdlasmdls</p>
                    </li>
                    


                </ul>
                <ul className="req_itemtext">
                <li>
                    <span>Számonkérések:</span>
                    <p>asdasdasdasdsafasfsafasfasfasasdddddddasdnkasldkmfmsadklasmdassakdmasdmlasmdlkasmdlkasmdaskldmkasldmsakdmaslmdaslkdmaslkdmalskmdlasmdasdasdasdsafasmsakdmaslmdaslkdmaslkdmalskmdlasmdls</p>
                    </li>
                    <li>
                    <span>Pontszámítás:</span>
                    <p>asdasdasdasdsafasfsafasfasfasasdddddddasdnkasldkmfmsadklasmdassakdmasdmlasmdlkasmdlkasmdaskldmkasldmsakdmaslmdaslkdmaslkdmalskmdlasmdasdasdasdsafasmsakdmaslmdaslkdmaslkdmalskmdlasmdls</p>
                    </li>
                </ul>
                </div>
                <ul>
            <a className="req_download" href="../img/Analisys_logo.svg" download>asdasdasd</a> 
            </ul>
            
            </div>
        </div>
    </div>
        )
    }


}


export default Requirements;
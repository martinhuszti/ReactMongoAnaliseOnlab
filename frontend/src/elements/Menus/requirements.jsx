import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import React, {Component} from 'react';

import { Button} from 'reactstrap';
import './requirements.css';

const PlaceString = 'Követelmények';

class Requirements extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dwnloadlnk:'',
            files: '',
        };
        this.downloadRandomImage=this.downloadRandomImage.bind(this);

    }
    async downloadRandomImage() {
        console.log("Feltlölt kezd")
        await  fetch(`/dwnload`)
         .then(response => {
            const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
            this.setState({
                files: filename,
            })
            response.blob().then(blob => {
            
            this.setState({
                dwnloadlnk: window.URL.createObjectURL(blob)
            })
            var clicker=document.getElementById("dwonload");
            clicker.click();
            console.log(this.state.dwnloadlnk.class)
            console.log(this.state.dwnloadlnk)
          
        });
    });
}


    render() {


        return (
            <div id="placeholder_news">
                <div id="placeholder_header"/>
                <div id="width_class">

                    <div class="news news_head">
                        <p class="news_text" dangerouslySetInnerHTML={{__html: PlaceString}}/>
                    </div>
                    <div className="news news_body">
                        <div className="req_flex">
                            <ul className="req_itemtext">
                                <li>
                                    <span>Jelenlét:</span>
                                    <p>Elő.</p>
                                </li>
                                <li>
                                    <span>Aláírás:</span>
                                    <p>Aláíyit külön-külön legalább 40%-ra megírta.</p>
                                </li>
                                <li>
                                    <span>Vizsga:</span>
                                    <p>Csak A 90 perces          
                                    </p>
                                </li>
                            </ul>
                            <ul className="req_itemtext">
                                <li>
                                    <span>Számonkérések:</span>
                                    <p>Minden zárthelyi írásbeli dolgozat, melyen semmiféle segédn.</p>
                                </li>
                                <li>
                                    <span>Pontszámítás:</span>
                                    <p>Az így00 esetén jeles (5)
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <ul>
                            <Button className="button_color" onClick={this.downloadRandomImage}>Teljes követelmény letöltése</Button>
                            <a id="dwonload" href={this.state.dwnloadlnk} download={this.state.files}></a>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }


}


export default Requirements;
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/news.css';
import React, {Component} from 'react';

import {Button} from 'reactstrap';
import './css/requirements.css';

const PlaceString = 'Követelmények';

class Requirements extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dwnloadlnk: '',
            files: '',
            items:[]
        };
        this.downloadRandomImage = this.downloadRandomImage.bind(this);

    }
    componentWillMount() {
        fetch(`/api/requirements`)
            .then(result => result.json())
            .then(items => {
                console.log(items);
                this.setState({ items});
                
            });
    }

    async downloadRandomImage() {
        console.log("Feltlölt kezd");
        await fetch(`/dwnload`)
            .then(response => {
                const filename = response.headers.get('Content-Disposition').split('filename=')[1];
                this.setState({
                    files: filename,
                });
                response.blob().then(blob => {

                    this.setState({
                        dwnloadlnk: window.URL.createObjectURL(blob)
                    });
                    var clicker = document.getElementById("dwonload");
                    clicker.click();
                    console.log(this.state.dwnloadlnk.class);
                    console.log(this.state.dwnloadlnk)

                });
            });
    }


    render() {

        const {items} = this.state;

        return (
            <div id="placeholder_news">
                <div id="placeholder_header"/>
                <div id="width_class">

                    <div className="news news_head">
                        <p className="news_text" dangerouslySetInnerHTML={{__html: PlaceString}}/>
                    </div>
                    <div className="news news_body">
                        <div className="req_flex">
                            <ul className="req_itemtext">
                                <li>
                                    <span>Jelenlét:</span>
                                    <p>{items[0]}</p>
                                </li>
                                <li>
                                    <span>Aláírás:</span>
                                    <p>{items[1]}</p>
                                </li>
                                <li>
                                    <span>Vizsga:</span>
                                    <p>{items[2]}
                                    </p>
                                </li>
                            </ul>
                            <ul className="req_itemtext">
                                <li>
                                    <span>Számonkérések:</span>
                                    <p>{items[3]}</p>
                                </li>
                                <li>
                                    <span>Pontszámítás:</span>
                                    <p>{items[4]}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <ul>
                            <Button className="button_color" onClick={this.downloadRandomImage}>Teljes követelmény
                                letöltése</Button>
                            <a id="dwonload" href={this.state.dwnloadlnk} download={this.state.files}/>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }


}


export default Requirements;
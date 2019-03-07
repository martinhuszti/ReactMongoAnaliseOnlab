import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import './loggedin.css';
import React, { Component } from 'react';


class LoggedIn extends Component {


    render() {
        return (
            <div id="placeholder_news">
                <div id="placeholder_header"></div>
                <div id="width_class">

                    <div className="news news_head">
                        <p className="news_text " >Login</p>
                    </div>
                    
                    <div className="news news_body news_body_padding">
                        <div className="row">
                            <div className="col-md-auto menu_items">
                                <div className="item">
                                    <p className="item_text_color">Adatok</p>
                                </div>
                                <div className="item">
                                    <p className="item_text_color">Eredmények</p>
                                </div>
                                <div className="item">
                                    <p className="item_text_color">Jelszó változtatás</p>
                                </div><div className="item random_place">
                                    
                                </div><div className="item">
                                    <p className="item_text_color order-12">Kijelentkezés</p>
                                </div>
                         </div>
                            <div className="col">
                                2 of 3
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default LoggedIn;
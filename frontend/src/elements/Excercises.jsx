import './Excercises.css';
import React, { Component } from 'react';

class Excercises extends Component {


    render() {


        return (
            <div id="placeholder_news">

                <div id="placeholder_header" />
                <div id="width_class">




                    <div className="news news_head">
                        <p className="news_text" href="">Feladatok</p>
                    </div>
                    <div className="news news_body exc_flexbox">
                        <div>
                            <h1 className="exc_main_title">ZH-k / Vizsgák</h1>
                            <span className="exc_sub_type">ZH</span>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi molestiae sunt praesentium totam nisi quis perferendis vitae quam. Modi, quis excepturi nisi dolorum ratione aperiam delectus voluptate rem iure!</span>

                            </div>
                            <span className="exc_sub_type">Vizsga</span>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi molestiae sunt praesentium totam nisi quis perferendis vitae quam. Modi, quis excepturi nisi dolorum ratione aperiam delectus voluptate rem iure!</span>

                            </div>
                        </div>
                        <div>
                            <h1 className="exc_main_title">Egyéb</h1>
                            <span className="exc_sub_type">Gyakorlat</span>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi molestiae sunt praesentium totam nisi quis perferendis vitae quam. Modi, quis excepturi nisi dolorum ratione aperiam delectus voluptate rem iure!</span>
                            </div>
                            <span className="exc_sub_type">Előadás</span>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi molestiae sunt praesentium totam nisi quis perferendis vitae quam. Modi, quis excepturi nisi dolorum ratione aperiam delectus voluptate rem iure!</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Excercises;

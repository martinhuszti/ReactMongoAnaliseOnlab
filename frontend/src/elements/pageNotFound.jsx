import React, { Component } from 'react';
import './menu.css';



class PageNotFound extends Component {




    render() {
        return (
            <div id="placeholder_news">

                <div id="placeholder_header" />
                <div id="width_class" className="pg_not_found">
                <span>404</span>
                <span className="pg_not_bottom">Oldal nem található. </span>
                <span>Keress fel másik URL-t, vagy lépj kapcsolatba az üzemeltetővel. </span>
                </div>
            </div>


        );
    }

}

export default PageNotFound;
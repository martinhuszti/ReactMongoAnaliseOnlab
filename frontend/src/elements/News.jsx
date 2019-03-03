import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const thisIsMyCopy = '<p>copy copy copy <strong>strong copy</strong></p>';

function SingleNews({ match }) {
    return (
      <div>
        <h2>User: {match.params.singlenews}</h2>
      </div>
    );
  }


const News = () => (
<div id="placeholder_news">
<div id= "placeholder_header"></div>
   <div id="width_class">

           <div class="news news_head">
               <a class="news_text" href="">Hírek</a>
           </div>
           <div class="news news_body">
           <div className="content" dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>

           </div>
       </div>
       </div>
  );

  export default News;
import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import React, { Component } from 'react';


const PlaceString = 'Követelmények';


const Requirements = () => (
<div id="placeholder_news">
<div id= "placeholder_header"></div>
   <div id="width_class">

           <div class="news news_head">
               <p class="news_text"dangerouslySetInnerHTML={{__html: PlaceString}}></p>
           </div>
           <div class="news news_body">
           

           </div>
       </div>
       </div>
  );

  export default Requirements;
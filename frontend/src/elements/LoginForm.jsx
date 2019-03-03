import './news.css';
import './LoginForm.css'
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from'react-bootstrap/ButtonToolbar'



     class RegistrationForm extends Component {


        handleSubmit = () => {
    
            let usrs = {
                "firstName" : "OCUW5I",
                "lastName" : "OCUW5I",
                "neptun" : "OCUW5I",
                "password" : "OCUW5I",
                "email" : "OCUW5I"
            }
    
            console.log('this is:', this);
    
                fetch('/adduser', {
                    method:"POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(usrs)
                })
    
    
        }
        render() {

            return (
                
                <div className="center_login">
                <form>
              <label className="center_login">
              <div className="helper_text">Felhasználónév:</div> 
                <input className="login_color" type="text" name="name" />
              <div className="helper_text">Jelszó:</div> 
                <input className="login_color" type="password" name="password"/>
                <div className="remember_me"><input type="checkbox" id="remember_me" name="_remember_me" checked />
                <label className="remember_me_text helper_text">Maradjak bejelentkezve</label></div>
                
             </label>
               </form>
               <div className="center_login">
               <Button className= "button_color button_width"onClick={this.handleSubmit} variant="primary">
                      <p className="button_width">Belépés</p></Button>
                      </div>
                 
                 </div>
                
            );
        }
    }

    const LoginForm = () => (
        <div id="placeholder_news">
    <div id= "placeholder_header"></div>
       <div id="login_width">
    
               <div class="news news_head rounded_corners_top">
                   <p class="login_text">Bejelentkezés</p>
               </div>
               <div class="news news_body login_color rounded_corners_bottom">
              <RegistrationForm/>
               </div>
           </div>
           </div>
      );


  export default LoginForm;
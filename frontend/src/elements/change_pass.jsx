import React, { Component } from 'react';
import './change_pass.css';
import Button from 'react-bootstrap/Button';

class Change_Pass extends Component {

  passStyles = {
    passwordText:'text',
    css_style: 'pass_lookup_button'
};

      constructor(props) {
        super(props);
    
        this.state = {
          color:true,
          textPass:"password",
      };

      this.showPass=this.showPass.bind(this);
      }
    
    
    showPass(event){
      
      this.setState({color: !this.state.color});
    }

    render() {
      let btn_class = this.state.color ?  "pass_lookup_button" : "pass_lookup_button_asd"
      let pass_style=this.state.color ? "password" : "text"
        

        return (
            <div>
                <ul className="pass_list">
                    <li >
                        <span >Régi jelszó:</span>
                        <i className="fa fa-eye"/>
                        <input className="pass_newpass"
                                           type="password"
                                           name="password"
                                           id='new_password'
                                           
                                           onChange={this.handleChange}
                                    />
                                    
                    </li>
                    
                    
                    <li>
                        <span>Új jelszó: </span>
                        <input className="pass_newpass"
                                           type={pass_style}
                                           name="password"
                                           id='re_password'
                                           onChange={this.handleChange}
                                    />
                    
                    <div onClick={this.showPass} className={btn_class}></div>
                    </li>
                    <li>
                        <span>Megerősítés:</span>
                        <input className="pass_newpass"
                                           type="password"
                                           name="password"
                                           id='old_password'
                                           onChange={this.handleChange}
                                    />
                    </li>
                </ul>

                <div className="pass_flex_display">
                    <div className="pass_short_area"></div>
                    <Button className="button_color button_width" onClick={this.handleSubmit}
                        variant="primary">
                        <p className="button_width">Jelszó változtatás</p></Button>
                    <div className="pass_long_area"></div>
                </div>

            </div>


        )
    }
}

export default Change_Pass;

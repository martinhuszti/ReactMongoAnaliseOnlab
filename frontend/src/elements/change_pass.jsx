import React, { Component } from 'react';
import './change_pass.css';
import Button from 'react-bootstrap/Button';
import Eye from '@material-ui/icons/Visibility';
import EyeSlash from '@material-ui/icons/VisibilityOff';

class Change_Pass extends Component {

  passStyles = {
    passwordText:'text',
    css_style: 'pass_lookup_button'
};

      constructor(props) {
        super(props);
    
        this.state = {
          password: "",
          c_password: "",
          color:true,
          textPass:"password",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showPass=this.showPass.bind(this);
      }

      inputPassword = event => {
        this.setState({ password: event.target.value });
      };
    
      confirmPassword = event => {
        this.setState({ c_password: event.target.value });
      };

      handleSubmit(event) {
        event.preventDefault();
        const { password, c_password } = this.state;
        const matches = password === c_password;
        if(matches==false)alert("Nem egyeznek a jelszavak");  
      }
    
    
    showPass(event){
      
      this.setState({color: !this.state.color});
    }

    render() {
      let btn_class = this.state.color ? <EyeSlash/> :<Eye/> 
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
                                           
                                    />
                                    
                    </li>
                    
                    
                    <li>
                        <span>Új jelszó: </span>
                        <input className="pass_newpass"
                                           type={pass_style}
                                           
                                           id='re_password'
                                           name="password"
            onChange={this.inputPassword}
                                    />
                    
                    <div onClick={this.showPass} className='pass_lookup_button'>{btn_class}</div>
                    </li>
                    <li>
                        <span>Megerősítés:</span>
                        <input className="pass_newpass"
                                           type="password"
                                           
                                           id='old_password'
                                           name="c_password"
            onChange={this.confirmPassword}
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

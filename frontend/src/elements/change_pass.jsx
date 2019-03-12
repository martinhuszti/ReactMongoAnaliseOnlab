import React, { Component } from 'react';
import './change_pass.css';
import Button from 'react-bootstrap/Button';

class Change_Pass extends Component {


    styles = theme => ({
        eye: {
          cursor: 'pointer',
        },
      });

      constructor(props) {
        super(props);
    
        this.state = {
          passwordIsMasked: true,
        };
      }
    
      togglePasswordMask = () => {
        this.setState(prevState => ({
          passwordIsMasked: !prevState.passwordIsMasked,
        }));
    };

    render() {

        

        return (
            <div>
                <ul className="pass_list">
                    <li >
                        <span >Régi jelszó:</span>
                        <input className="pass_newpass"
                                           type={this.state.type}
                                           name="password"
                                           id='new_password'
                                           
                                           onChange={this.handleChange}
                                    />
                                    
                    </li>
                    
                    <li>
                        <span>Új jelszó: </span>
                        <input className="pass_newpass"
                                           type="password"
                                           name="password"
                                           id='re_password'
                                           onChange={this.handleChange}
                                    />
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

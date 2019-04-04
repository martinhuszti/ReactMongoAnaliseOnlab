
import React, { Component } from 'react';
import "./css/popup.css"
import Clear from '@material-ui/icons/Clear';


class Popup extends Component {

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
        console.log(this.props.title)
        console.log("toogleval")
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            console.log("bele van kattintva")
            return;
        }

        this.handleOutsideClick();
    }

    handleOutsideClick() {
        this.props.closePopup();

    }

    render() {
        return (
            <div className='popup_color'>
            <div className='popup_width'>
                <div ref={node => { this.node = node; }} className='popup_inner'>
                    <div className='popup_titlebox'>
                        <p className='popup_title'>{this.props.title}</p>
                        <Clear className='popup_clear' onClick={this.props.closePopup}></Clear>
                    </div>
                    
                    <div className='popup_textbox'>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Popup;
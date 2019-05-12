import React, {Component} from "react";
import "./css/popup.css";
import Clear from "@material-ui/icons/Clear";


class Popup extends Component {

    componentWillMount() {
        document.addEventListener("click", this.handleClick, false);
       
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
           
            return;
        }

        this.handleOutsideClick();
    };

    handleOutsideClick() {
        this.props.closePopup();

    }

    render() {
        const {props} = this;

        return (
            <div className="popup_color">
                <div className="popup_width">
                    <div ref={node => {
                        this.node = node;
                    }} className="popup_inner">
                        <div className="popup_titlebox">
                            <p className="popup_title">{props.title}</p>
                            <Clear className="popup_clear" onClick={props.closePopup}/>
                        </div>

                        <div className="popup_textbox">
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
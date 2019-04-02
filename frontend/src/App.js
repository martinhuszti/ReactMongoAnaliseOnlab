import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './elements/Header.jsx';
import Footer from './elements/Footer';
import RegFrom from './elements/RegistrationForm';


class App extends Component {

    state = {};

    componentDidMount() {
        setInterval(this.hello, 250);
        document.title = "Login Page";
    }

    hello = () => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    render() {
        return (
            <div className="App">
                <Header/>

                <Footer/>
            </div>
        );
    }
}


export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from '@material-ui/core/Button';
import Header from './elements/Header.jsx';
import RegForm from './elements/RegistrationForm.jsx'

//import Footer from './elements/Footer';


class App extends Component {

    state = {}

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
    }

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

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <h1 className="App-title">asdasd</h1>

                </header>

                <RegForm/>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

            </div>
        );
    }
}


export default App;

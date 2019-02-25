import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './elements/Header.jsx';
import Footer from './elements/Footer';



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
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.message}</h1>
                </header>
                <p className="App-intro">F
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Footer/>
            </div>
        );
    }
}



export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from '@material-ui/core/Button';
import Header from './elements/Header.jsx';
//import Footer from './elements/Footer';



class App extends Component {

    state = {};

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
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

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

    render() {
        return (
            <div className="App">
                <Header/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.message}</h1>
                </header>
                <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
                <p className="App-intro">F
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
          
            </div>
        );
    }
}



export default App;

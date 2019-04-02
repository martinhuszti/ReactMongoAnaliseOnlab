import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './elements/Header.jsx';
import Footer from './elements/Footer';
import RegFrom from './elements/RegistrationForm';


class App extends Component {

    state = {};

    componentDidMount() {

        document.title = "Login Page";
    }



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

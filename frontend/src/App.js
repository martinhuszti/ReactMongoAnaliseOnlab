import React, {Component} from 'react';
import './App.css';

import Header from './elements/header.jsx';
import Footer from './elements/footer';


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

import React from 'react';
import logo from '../logo.svg';
import InputURL from './InputURL';
import '../styles/components/App.css'
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import NotFound from './NotFound';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';

const App = () => {
    return (
        <Router>
                <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to FEO</h2>
                </div>
                <InputURL/>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/topics'>Topics</Link></li>
                </ul>
                <hr/>
                <Match exactly pattern='/' component={Home}/>
                <Match pattern='/about' component={About}/>
                <Match pattern='/topics' component={Topics}/>
                <Miss component={NotFound}/>
                <div style={ {textAlign: 'center'} }>
                    <Counter/>
                    <Option/>
                    <Buttons/>
                </div>
            </div>
        </Router>
    );
};

export default App;
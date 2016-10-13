import React, {Component} from 'react';
import '../styles/components/InputURL.css'

export default class InputURL extends Component {
    render() {
        return (
            <div className="InputURL">
                <div className="text">http(s)://</div>
                <input className="input" type="text" name="phone" placeholder="www."/>
                <button className="button">start</button>
            </div>
        );
    }
};

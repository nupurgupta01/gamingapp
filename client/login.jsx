import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: 'loading'
        }
    }

    componentDidMount() {
        fetch('/auth/login')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    }

    render() {
        return (
            
            <div>
            

                <p>{this.state.message}</p>
                <ul>
                <li><a href='/auth/google' class='fab fa-google-plus-g'></a></li>
                
                </ul>
            </div>
        );
    }
}


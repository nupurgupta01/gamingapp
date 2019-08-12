import React, { Component } from 'react';
// import { Link, Route, Switch } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            message: 'loading'
        }
    }

    componentDidMount() {
        fetch('/auth/google/redirect')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    }

    render() {
        return (
            <div>
                <li><Link to="/login">Login</Link></li>

                <p>{this.state.message}</p>
            </div>
        );
    }
}


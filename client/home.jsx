import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: 'loading'
        }
    }

    componentDidMount() {
        fetch('/auth/home')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    }

    render() {
        return (
            <div>
                
                 <p>{this.state.message}</p>
            </div>
        );
    }
}


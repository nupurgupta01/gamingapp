import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './home'
import Login from './login'
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>HOMEPAGE</h1>
//             </div>
//         );
//     }
// }
export default class App extends Component {
    render() {
        return (
            <div>
            
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    
                </ul>        
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

//export default App;

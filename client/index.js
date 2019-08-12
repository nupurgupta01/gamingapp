import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './app'
// if (module.hot) {
//     console.info('hot')
//     // Whenever a new version of App.js is available
//     module.hot.accept('./App', function () {
//         // Require the new version and render it instead
        
//         ReactDOM.render(<App />, document.getElementById('root'))
//     })
// }
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
//module.hot.accept();
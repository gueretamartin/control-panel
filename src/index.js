import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ThermometerRender from './components/ThermometerRender';  
import Navbar from './components/Navbar'; 
import "bootswatch/dist/darkly/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <Route path="/" component={Navbar} />
      <Route path="/" component={App} />
          <Route path="/thermometer" component={ThermometerRender} /> 
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

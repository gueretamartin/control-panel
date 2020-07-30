import React from 'react';
import ReactDOM from 'react-dom';  
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ThermometerRender from './components/ThermometerRender';  
import Navbar from './components/Navbar';  
import Section from './components/Section';
import "bootswatch/dist/darkly/bootstrap.min.css";

class App extends React.Component { 
  render() { 
    return ( 
    <Router> 
       {/* <Switch>   */}
        <Route path="/" component={Navbar} />
        <Route path="/thermometer" component={ThermometerRender} /> 
        <Route path="/section" component={Section} />
        {/* </Switch>  */}
    </Router>
    )};
}


ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

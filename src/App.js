import React from 'react';
import { Route, BrowserRouter as Router,Switch,Link } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import  Section from './components/Section';
import "bootswatch/dist/darkly/bootstrap.min.css";

export default function App() {
  return (
    <Router>
    <div>
      <Navbar link={Link} />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/section" component={Section}> 
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
 )
};

function Home() {
  return <h2>Home</h2>;
}

function Contact() {
  return <h2>Contact Me</h2>;
}
 
import React from 'react';
import {render} from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import About from './about.jsx';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          // Set up the Router
          <Route exact path="/" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />

          <div className="navigation">
            <img src={logo} className="logo-image" alt="Logo Image" />
            <div className="navigation-sub">

              // Set up the Links
              <Link to="/" className="item">Projects</Link>
              <Link to="/contact" className="item">Contact</Link>
              <Link to="/about" className="item">About</Link>

            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.body);

import React from 'react';
import {render} from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './assets/images/logo.png';
console.log(logo);
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import About from './about.jsx';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* Set up the Router*/}
          <Route exact path="/" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <div className="navigation">
            <div className="navigation-sub">

              {/* Set up the Links */}
              <Link to="/" className="item">Projects</Link>
              <Link to="/about" className="item">About</Link>
              <Link to="/contact" className="item">Contact</Link>

          <div className="header">

            <img src={require('./assets/images/logo.png')} className="logo-image" alt="Logo Image" />
          </div>

            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.body);

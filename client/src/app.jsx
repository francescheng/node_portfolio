import React from 'react';
import {render} from 'react-dom';
import Logo from '/assets/logo.png'
console.log(logo);

import { BrowserRouter, Route, Link } from 'react-router-dom';
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

          <div className="header">
          const icon = new Image();
          icon.src = Logo;

            <img src={Logo} className="logo-image" alt="Logo Image" />
          </div>

          <div className="navigation">
            <div className="navigation-sub">

              {/* Set up the Links */}
              <Link to="/" className="item">Projects</Link>
              <Link to="/about" className="item">About</Link>
              <Link to="/contact" className="item">Contact</Link>

            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.body);

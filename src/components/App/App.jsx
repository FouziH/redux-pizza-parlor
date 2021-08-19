import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import StartOrder from '../StarOrder/StarOrder';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/order">ORDER</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact>
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
        </Route>
        <Route path="/order" exact>
          {/* Enter Select pizza page */}
          <StartOrder />
        </Route>
        <Route path="/customer" exact>
          {/* Enter Select pizza page */}
        </Route>
        <Route path="/checkout" exact>
          {/* Enter Select pizza page */}
        </Route>
      </Router>
    </div>
  );
}

export default App;

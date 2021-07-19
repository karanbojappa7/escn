import React from 'react';
import './App.css';
import Info from './info';
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import About from './about';
import contact from './contact'


function App() {

  
  return (
    <div className="App">
      <nav>
        <a class="mee" href="./">Home</a> 
        <a class="mee1" href="./About">About</a>
        <a class="mee2" href="./contact">Contact</a>
      </nav>
      <Router>
       <Switch>
         <Route path="/About" component={About} />
         <Route path="/contact" component={contact} />
         <Route path="/" component={Info} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
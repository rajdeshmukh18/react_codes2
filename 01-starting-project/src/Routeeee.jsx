import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';


const Routeeee = () => {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" render={() => <Home />} />
<Route path="/about" render={() => <About />} />
<Route path="/contact" render={() => <Contact />} />
<Route component={NotFound} />

        </Switch>
      </div>
    </Router>
  );
}

export default Routeeee;

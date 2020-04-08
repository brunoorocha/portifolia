import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { NavBar, ScrollToTop } from './components/'
import './assets/css/style.less'
import { SignUp } from './pages/sign-up/SignUp';


const App: React.FC = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/sign-up">
          <ScrollToTop />
          <SignUp />
        </Route>

        <Route path="">
          <ScrollToTop />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

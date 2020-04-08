import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { NavBar, ScrollToTop } from './components/'
import './assets/css/style.less'
import { SignUp } from './pages/sign-up/SignUp';
import { SignIn } from './pages/sign-in/SignIn';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <ScrollToTop />
          <SignUp />
        </Route>

        <Route path="/sign-in">
          <ScrollToTop />
          <SignIn />
        </Route>

        <Route path="">
          <ScrollToTop />
          <NavBar />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

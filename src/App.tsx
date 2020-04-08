import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { NavBar, ScrollToTop } from './components/'
import './assets/css/style.less'
import { SignUp } from './pages/sign-up/SignUp'
import { SignIn } from './pages/sign-in/SignIn'
import { routes } from './pages/routes'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.signUp}>
          <ScrollToTop />
          <SignUp />
        </Route>

        <Route path={routes.signIn}>
          <ScrollToTop />
          <SignIn />
        </Route>

        <Route path={routes.home}>
          <ScrollToTop />
          <NavBar />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

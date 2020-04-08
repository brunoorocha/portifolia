import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NavBar, ScrollToTop } from './components/'
import { SignUp } from './pages/sign-up/SignUp'
import { SignIn } from './pages/sign-in/SignIn'
import { HomePage } from './pages/home'
import { routes } from './pages/routes'
import store from './store'
import './assets/css/style.less'

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NavBar, ScrollToTop, MessageCenter, RoutesAuth } from './components/'
import { Home } from './pages/home'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { SignOut } from './pages/sign-out'
import { Upload } from './pages/upload'
import { Profile } from './pages/profile'
import { ProjectDetails } from './pages/project-details'
import { routes } from './pages/routes'
import store from './store'
import './assets/css/style.less'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MessageCenter />
      <RoutesAuth />

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

          <Route path={routes.signOut}>
            <SignOut />
          </Route>

          <Route path={routes.upload}>
            <ScrollToTop />
            <NavBar />
            <Upload />
          </Route>

          <Route path={`${routes.projects}/:projectId`}>
            <ScrollToTop />
            <NavBar />
            <ProjectDetails />
          </Route>

          <Route path="/:username">
            <ScrollToTop />
            <NavBar />
            <Profile />
          </Route>

          <Route path={routes.home}>
            <ScrollToTop />
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

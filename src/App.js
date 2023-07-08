import {Switch, Route, Redirect} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import NotFoundRoute from './components/NotFoundRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <Route exact path="/not-found" component={NotFoundRoute} />
    <Redirect to="/not-found" />
  </Switch>
)
export default App

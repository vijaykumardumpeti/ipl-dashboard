import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <div className="app-bg-container">
    <Home />
    <Switch>
      <Route path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </div>
)

export default App

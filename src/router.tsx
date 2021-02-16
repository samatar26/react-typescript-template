import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './home'

const EntryRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)

export default EntryRouter

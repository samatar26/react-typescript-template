import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home'

const EntryRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)

export default EntryRouter

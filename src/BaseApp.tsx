import { Provider } from 'react-redux'
import { createStore } from './state/store'
import EntryRouter from './router'
import GlobalStyles from './styles/GlobalStyles'

const BaseApp = () => (
  <Provider store={createStore()}>
    <GlobalStyles />
    <EntryRouter />
  </Provider>
)

export default BaseApp

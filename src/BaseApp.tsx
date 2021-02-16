import { Provider } from 'react-redux'

import EntryRouter from './router'
import { createStore } from './state/store'
import GlobalStyles from './styles/GlobalStyles'

const BaseApp = () => (
  <Provider store={createStore()}>
    <GlobalStyles />
    <EntryRouter />
  </Provider>
)

export default BaseApp

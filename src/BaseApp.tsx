import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import EntryRouter from './router'
import { createStore } from './state/store'
import GlobalStyles from './styles/GlobalStyles'

const queryClient = new QueryClient()

const BaseApp = () => (
  <Provider store={createStore()}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <EntryRouter />
    </QueryClientProvider>
  </Provider>
)

export default BaseApp

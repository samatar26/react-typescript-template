import { Provider } from 'react-redux'
import { createStore, RootState } from '../state/store'
import EntryRouter from './router'

type BaseAppProps = {
  initialState?: Partial<RootState>
}

const BaseApp: React.FC<BaseAppProps> = ({ initialState }: BaseAppProps) => (
  <Provider store={createStore(initialState)}>
    <EntryRouter />
  </Provider>
)

export default BaseApp

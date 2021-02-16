import { ConnectedProps, connect } from 'react-redux'

import Button from '../components/button/Button'
import { decrement, increment } from '../state/counter'
import { RootState } from '../state/store'

const Home: React.FC<PropsFromRedux> = ({
  count,
  dispatch,
}: PropsFromRedux) => (
  <main>
    <Button onClick={() => dispatch(decrement())}>-</Button>
    <span>{count}</span>
    <Button onClick={() => dispatch(increment())}>+</Button>
  </main>
)

const mapStateToProps = (state: RootState) => ({
  count: state.counter,
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Home)

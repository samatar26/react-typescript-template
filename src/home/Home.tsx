import { decrement, increment, RootState } from '../../state/store'
import { connect, ConnectedProps } from 'react-redux'

const Home: React.FC<PropsFromRedux> = ({
  count,
  dispatch,
}: PropsFromRedux) => (
  <main>
    <button onClick={() => dispatch(decrement())}>-</button>
    <span>{count}</span>
    <button onClick={() => dispatch(increment())}>+</button>
  </main>
)

const mapStateToProps = (state: RootState) => ({
  count: state.counter,
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Home)

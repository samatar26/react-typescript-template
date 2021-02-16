import { useQuery } from 'react-query'
import { ConnectedProps, connect } from 'react-redux'

import Button from '../components/button/Button'
import { getUser } from '../requests/user'
import { decrement, increment } from '../state/counter'
import { RootState } from '../state/store'

const Home: React.FC<PropsFromRedux> = ({
  count,
  dispatch,
}: PropsFromRedux) => {
  const { isSuccess, data } = useQuery('user', getUser)

  return (
    <main>
      <section>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <span>{count}</span>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </section>
      {isSuccess && (
        <section>
          <h1>{`${data.results[0].name.first} ${data.results[0].name.last}`}</h1>
        </section>
      )}
    </main>
  )
}

const mapStateToProps = (state: RootState) => ({
  count: state.counter,
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Home)

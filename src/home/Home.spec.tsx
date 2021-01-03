import Home from './Home'
import { render } from '@testing-library/react'

describe('Home', () => {
  it('displays hello world!', () => {
    const app = render(<Home />)
    expect(app.getByText('Hello World!')).toBeTruthy()
  })
})

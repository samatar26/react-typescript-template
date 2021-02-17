import { RenderResult, fireEvent, render } from '@testing-library/react'

import BaseApp from '../BaseApp'
import { server } from '../mocks/server'

describe('Home', () => {
  let app: RenderResult
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

  beforeEach(() => {
    app = render(<BaseApp />)
  })
  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('displays a count', () => {
    app.getByText('0')
  })

  it('increments the count when the user clicks +', () => {
    fireEvent.click(app.getByText('+'))
    app.getByText('1')
  })

  it('decrements the count when the user clicks -', () => {
    fireEvent.click(app.getByText('-'))
    app.getByText('-1')
  })

  it('makes a call to an api', async () => {
    await app.findByText('Sam Ax')
  })
})

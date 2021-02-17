import { fireEvent, render, screen } from '@testing-library/react'

import BaseApp from '../BaseApp'
import { server } from '../mocks/server'

describe('Home', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

  beforeEach(() => {
    render(<BaseApp />)
  })
  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('displays a count', () => {
    screen.getByText('0')
  })

  it('increments the count when the user clicks +', () => {
    fireEvent.click(screen.getByText('+'))
    screen.getByText('1')
  })

  it('decrements the count when the user clicks -', () => {
    fireEvent.click(screen.getByText('-'))
    screen.getByText('-1')
  })

  it('makes a call to an api', async () => {
    await screen.findByText('Sam Ax')
  })
})

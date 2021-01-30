import { fireEvent, render, RenderResult } from '@testing-library/react'
import BaseApp from '../BaseApp'

describe('Home', () => {
  let app: RenderResult

  beforeEach(() => {
    app = render(<BaseApp />)
  })

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
})

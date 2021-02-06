import { darken } from 'polished'

const ctaPrimaryColour = '#1976d2'
const ctaHoverColour = darken(0.1, ctaPrimaryColour)

const colors = {
  text: {
    primary: '#0b0c0c',
    secondary: '#505a5f',
    cta: '#fff',
  },
  cta: {
    primary: ctaPrimaryColour,
    hover: ctaHoverColour,
  },
}

export default colors

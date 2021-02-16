import { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlobalStyles = createGlobalStyle`
html {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  color: ${colors.text.primary};
}

#root {
  height: 100%;
}

img {
  display: block; 
  max-width: 100%;
}
`

export default GlobalStyles

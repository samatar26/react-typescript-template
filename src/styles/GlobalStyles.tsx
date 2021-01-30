import { createGlobalStyle } from 'styled-components'

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
}

#root {
  height: 100%;
}
`

export default GlobalStyles

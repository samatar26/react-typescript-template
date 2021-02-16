import styled from 'styled-components'

import colors from '../../styles/colors'
import space from '../../styles/spacing'

const StyledButton = styled.button`
  padding: ${space[1]};
  border: none;
  border-radius: ${space[0]};
  background-color: ${colors.cta.primary};
  color: ${colors.text.cta};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: ${colors.cta.hover};
  }
  cursor: pointer;
`

export default StyledButton

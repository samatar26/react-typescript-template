import StyledButton from './Button.styles'

type ButtonProps = {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactChildren | string
}

const Button = ({ onClick, children }: ButtonProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button

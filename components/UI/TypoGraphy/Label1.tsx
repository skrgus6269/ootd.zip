import styled from 'styled-components'

const Label = styled.div`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.md}; //16px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //20px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`

export default Label

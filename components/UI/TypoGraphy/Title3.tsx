import styled from 'styled-components'

const Title = styled.div`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.sm}; //14px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`

export default Title

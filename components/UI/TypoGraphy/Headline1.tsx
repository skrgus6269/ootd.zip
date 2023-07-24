import styled from 'styled-components'

const Headline = styled.div`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.xl}; //32px
  line-height: ${({ theme }) => theme.lineHeight.vl}; //38px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`

export default Headline

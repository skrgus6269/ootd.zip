import styled from 'styled-components'

const Callout = styled.div`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.base}; //14px
  line-height: ${({ theme }) => theme.lineHeight.md}; //18px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.base}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`

export default Callout

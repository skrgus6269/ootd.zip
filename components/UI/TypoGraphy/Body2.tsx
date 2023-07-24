import styled from 'styled-components'

const Body = styled.div`
  font-weight: ${({ theme }) => theme.weight.light}; //300
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.base}; //16px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.sm}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`

export default Body

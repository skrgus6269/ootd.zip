import styled from 'styled-components'

const Title = styled.h4`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.base}; //14px
  line-height: ${({ theme }) => theme.lineHeight.md}; //18px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.base}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`

export default Title

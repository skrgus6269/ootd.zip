import styled from 'styled-components';

const Title = styled.h3`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.md}; //16px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //20px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.md}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`;

export default Title;

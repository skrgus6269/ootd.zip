import styled from 'styled-components';

const Headline = styled.h4`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.sm}; //14px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.sm}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`;

export default Headline;

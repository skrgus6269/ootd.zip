import styled from 'styled-components';

const Callout = styled.q`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.md}; //16px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //20px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.md}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`;

export default Callout;

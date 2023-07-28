import styled from 'styled-components';

const Callout = styled.q`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.xs}; //10px
  line-height: ${({ theme }) => theme.lineHeight.xs}; //12px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.xs}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`;

export default Callout;

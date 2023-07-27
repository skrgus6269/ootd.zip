import styled from 'styled-components';

const Headline = styled.h2`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.lg}; //24px
  line-height: ${({ theme }) => theme.lineHeight.xl}; //38px
  letter-spacing: calc(
    (${({ theme }) => theme.fontSize.lg}) *
      (${({ theme }) => theme.spacing.narrow})
  ); //-2%
`;

export default Headline;

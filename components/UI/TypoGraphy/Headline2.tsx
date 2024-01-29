import styled from 'styled-components';

const Headline2 = styled.h2`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.xl}; //24px
  line-height: ${({ theme }) => theme.lineHeight.xl}; //32px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Headline2;

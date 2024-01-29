import styled from 'styled-components';

const Headline1 = styled.h1`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.xxl}; //32px
  line-height: ${({ theme }) => theme.lineHeight.xxl}; //38px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Headline1;

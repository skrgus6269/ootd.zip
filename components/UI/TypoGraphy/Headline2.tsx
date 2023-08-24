import styled from 'styled-components';

const Headline = styled.h2`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.lg}; //24px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //30px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Headline;

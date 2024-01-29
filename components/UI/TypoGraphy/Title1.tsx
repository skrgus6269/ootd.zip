import styled from 'styled-components';

const Title1 = styled.h2`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.md}; //16px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //22px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Title1;

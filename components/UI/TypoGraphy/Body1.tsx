import styled from 'styled-components';

const Body = styled.p`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.xl}; //24px
  line-height: ${({ theme }) => theme.lineHeight.xl}; //32px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Body;

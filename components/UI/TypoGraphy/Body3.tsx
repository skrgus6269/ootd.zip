import styled from 'styled-components';

const Body = styled.p`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.base}; //14px
  line-height: ${({ theme }) => theme.lineHeight.md}; //18px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Body;

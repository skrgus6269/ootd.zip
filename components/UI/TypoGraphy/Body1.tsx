import styled from 'styled-components';

const Body = styled.div`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.base}; //16px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Body;

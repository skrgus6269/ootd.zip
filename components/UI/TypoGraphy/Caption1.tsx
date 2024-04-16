import styled from 'styled-components';

const Caption1 = styled.p`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.xs}; //16px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Caption1;

import styled from 'styled-components';

const Caption = styled.p`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.md}; //18px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Caption;

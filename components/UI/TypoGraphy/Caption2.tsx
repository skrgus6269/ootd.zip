import styled from 'styled-components';

const Caption = styled.p`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.xs}; //10px
  line-height: ${({ theme }) => theme.lineHeight.base}; //16px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Caption;

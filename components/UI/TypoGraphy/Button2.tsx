import styled from 'styled-components';

const Button2 = styled.p`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.md}; //16px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //20px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Button2;

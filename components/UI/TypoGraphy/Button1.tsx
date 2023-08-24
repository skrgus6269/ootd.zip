import styled from 'styled-components';

const Button = styled.p`
  font-weight: ${({ theme }) => theme.weight.regular}; //500
  font-size: ${({ theme }) => theme.fontSize.base}; //14px
  line-height: ${({ theme }) => theme.lineHeight.md}; //18px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Button;

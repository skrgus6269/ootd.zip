import styled from 'styled-components';

const Button1 = styled.p`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.lg}; //18px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //24px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
`;

export default Button1;

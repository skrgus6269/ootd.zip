import styled from 'styled-components';

interface Button1State {
  state?: 'thin';
}

const Button1 = styled.p<Button1State>`
  font-weight: ${({ theme }) => theme.weight.semibold}; //600
  font-size: ${({ theme }) => theme.fontSize.lg}; //18px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //24px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
  ${(props) =>
    props.state === 'thin' &&
    `
    font-weight: ${props.theme.weight.regular};
  `}
`;

export default Button1;

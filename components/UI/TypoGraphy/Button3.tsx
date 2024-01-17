import styled from 'styled-components';

interface Button3State {
  state?: 'emphasis';
}

const Button = styled.p<Button3State>`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.base}; //14px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //20px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
  ${(props) =>
    props.state === 'emphasis' &&
    `
    font-wiehgt: ${props.theme.weight.semibold};
  `}
`;

export default Button;

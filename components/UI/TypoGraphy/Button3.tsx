import styled from 'styled-components';

interface Button3State {
  state?: 'emphasis';
}

const Button3 = styled.p<Button3State>`
  font-weight: ${({ theme }) => theme.weight.medium}; //500
  font-size: ${({ theme }) => theme.fontSize.base}; //14px
  line-height: ${({ theme }) => theme.lineHeight.base}; //20px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
  ${(props) =>
    props.state === 'emphasis' &&
    `
    font-weight: ${props.theme.weight.semibold};
  `}
`;

export default Button3;

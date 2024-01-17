import styled from 'styled-components';

interface Body4State {
  state?: 'emphasis';
}

const Body = styled.p<Body4State>`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.base}; //16px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
  ${(props) =>
    props.state === 'emphasis' &&
    `
    font-weight: ${props.theme.weight.medium};
  `}
`;

export default Body;

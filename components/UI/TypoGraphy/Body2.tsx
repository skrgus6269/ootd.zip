import styled from 'styled-components';

interface Body2State {
  state?: 'emphasis';
}

const Body = styled.p<Body2State>`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.md}; //16px
  line-height: ${({ theme }) => theme.lineHeight.lg}; //20px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
  ${(props) =>
    props.state === 'emphasis' &&
    `
  font-weight: ${props.theme.weight.semibold}; //600 
  `}
`;

export default Body;

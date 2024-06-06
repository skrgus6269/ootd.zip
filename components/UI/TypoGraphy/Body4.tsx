import styled from 'styled-components';

interface Body4State {
  state?: 'emphasis';
}

const Body4 = styled.p<Body4State>`
  font-weight: ${({ theme }) => theme.weight.regular}; //400
  font-size: ${({ theme }) => theme.fontSize.sm}; //12px
  line-height: ${({ theme }) => theme.lineHeight.sm}; //18px
  letter-spacing: ${({ theme }) => theme.spacing.default}; //0%
  ${(props) =>
    props.state === 'emphasis' &&
    `
    font-weight: ${props.theme.weight.medium};
  `}
`;

export default Body4;

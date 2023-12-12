import styled from 'styled-components';

interface ColorSpanProps {
  color: string;
  state: Boolean;
}

const Layout = styled.div`
  height: 86px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ColorSpan = styled.div<ColorSpanProps>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${(props) =>
    props.state &&
    `
    border: 2px solid black; 
  `}
`;

const ColorName = styled.div``;
const S = { Layout, ColorSpan, ColorName };

export default S;

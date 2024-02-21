import styled from 'styled-components';

interface LayoutProps {
  state: Boolean;
}

const Layout = styled.div<LayoutProps>`
  visibility: ${(props) => (props.state ? 'visible' : 'hidden')};
  display: flex;
  width: calc(100% - 16px);
  text-align: center;
  position: absolute;
  bottom: 71px;
  margin: 0px 8px;
  padding: 10px 16px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.grey_00};
  color: ${(props) => props.theme.color.grey_100};
  border-radius: 2px;
`;

const S = {
  Layout,
};

export default S;

import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 3;
  padding-top: 10px;
  border-top: 2px solid black;
`;

interface ButtonWrapType {
  name: string;
}

const ButtonWrap = styled.div<ButtonWrapType>`
  display: flex;
  padding: 20px 0px;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-bottom: 1px solid ${(props) => props.theme.color.grey_95};
  color: ${(props) => props.name === '삭제' && `${props.theme.color.error}`};
`;

const S = {
  Layout,
  ButtonWrap,
};

export default S;

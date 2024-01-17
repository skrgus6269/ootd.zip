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

  /* display: inline-flex;

flex-direction: column;
justify-content: flex-end;
align-items: flex-start; */
`;

const ButtonWrap = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-bottom: 1px solid black;
`;

const S = {
  Layout,
  ButtonWrap,
};

export default S;

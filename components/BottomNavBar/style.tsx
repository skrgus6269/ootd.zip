import styled from 'styled-components';

const BottomComponent = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
`;

const BottomComponentItem = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export { BottomComponent, BottomComponentItem };

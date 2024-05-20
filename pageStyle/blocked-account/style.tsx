import styled from 'styled-components';

const WholeLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: calc(100vh - 245px);
`;

const Layout = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  gap: 16px;

  img,
  .avatar {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .userName {
    flex: 1 0 0;
  }

  .deleteButton {
    width: 70px;
    height: 30px;
    background-color: ${(props) => props.theme.color.grey_95};
    color: ${(props) => props.theme.color.grey_00};
    border-radius: 2px;
    border: '1px solid black';
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const S = {
  WholeLayout,
  Layout,
};

export default S;

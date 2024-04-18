import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
  margin-top: 16px;
  .main {
    margin-top: 16px;
    overflow-y: scroll;
  }
  .colorList {
    border-bottom: 1px solid ${(props) => props.theme.color.grey_95};
    padding-bottom: 130px;
  }
  .top {
    padding: 0 20px 8px 20px;
    color: ${(props) => props.theme.color.grey_50};
  }
`;

interface SelectedFilterType {
  state: Boolean;
}

const SelectedFilter = styled.div<SelectedFilterType>`
  display: ${(props) => (props.state ? 'flex' : 'none')};
  position: fixed;
  z-index: 999;
  gap: 8px;
  background-color: white;
  bottom: 72px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  padding: 16px 20px 16px 24px;
`;
const SelectedFilterSpan = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 8px 35px 8px 16px;
  background-color: ${(props) => props.theme.color.grey_10};
  color: ${(props) => props.theme.color.grey_100};
  border-radius: 17px;

  .close {
    color: ${(props) => props.theme.color.grey_100};
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translate(0, -50%);
    width: 16px;
    height: 16px;
  }
`;

interface SelectedButtonState {
  state: Boolean;
}

const SelectedButton = styled.div<SelectedButtonState>`
  display: flex;
  padding: 16px 20px 24px 20px;
  gap: 8px;
  position: fixed;
  z-index: 999;
  background-color: white;
  width: 100%;
  max-width: 430px;
  bottom: 0px;
  .init {
    width: 30%;
    border: 1px solid ${(props) => props.theme.color.grey_80};
  }
  .submit {
    width: 70%;
  }
  ${(props) =>
    props.state &&
    ` 
    .init {
        border: 1px solid ${props.theme.color.grey_00};
        color:   ${props.theme.color.grey_00};
    } 
  `}
`;

const S = { Layout, SelectedFilter, SelectedFilterSpan, SelectedButton };

export default S;

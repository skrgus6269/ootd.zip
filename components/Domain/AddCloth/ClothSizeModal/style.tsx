import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  .nextButton {
    position: relative;
    bottom: 25px;
    background-color: white;
    border: none;
  }
`;
const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .title {
    padding: 22px 0;
  }
  .close {
    position: absolute;
    right: 0px;
    width: 24px;
    height: 24px;
  }
`;
const SizeLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  padding-bottom: 30px;
`;
const SizeBlock = styled.div`
  display: flex;
  gap: 4px;
`;
interface SizeProps {
  many: number;
  state: Boolean;
}
const Size = styled.div<SizeProps>`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.color.grey_90};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / ${(props) => props.many});
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : ''};
  color: ${(props) => (props.state ? props.theme.color.grey_100 : '')};
  border-radius: 2px;
`;

const S = { Layout, Title, SizeLayout, SizeBlock, Size };

export default S;

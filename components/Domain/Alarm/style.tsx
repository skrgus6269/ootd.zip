import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid ${(props) => props.theme.color.grey_95};
`;
const Left = styled.div`
  img {
    object-fit: cover;
    border-radius: 50%;
  }
  svg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  margin: 0 8px;
  position: relative;
  z-index: 13;
  .userName {
    white-space: nowrap;
    position: relative;
    z-index: 13;
  }
  .content,
  .timeStamp {
    color: ${(props) => props.theme.color.grey_50};
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
    max-width: 270px;
  }
`;
const Right = styled.div`
  img {
    border-radius: 2px;
  }
`;
const Message = styled.div`
  p {
    display: inline;
  }
`;

const S = { Layout, Left, Middle, Right, Message };

export default S;

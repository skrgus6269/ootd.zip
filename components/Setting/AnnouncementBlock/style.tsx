import styled from 'styled-components';

const Layout = styled.div<IsOpen>`
  padding: 24px 16px;
  position: relative;
  z-index: 2;
  background-color: ${(props) => props.theme.color.grey_100};
  border-bottom: ${(props) =>
    props.isOpen ? 'none' : `1px solid ${props.theme.color.grey_90}`};
`;
const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  .date {
    color: ${(props) => props.theme.color.grey_40};
  }
  .new {
    color: ${(props) => props.theme.color.correct};
    position: relative;
    bottom: 1px;
  }
`;

interface IsOpen {
  isOpen: Boolean;
}

const Body = styled.div<IsOpen>`
  background-color: ${(props) => props.theme.color.grey_95};
  white-space: pre-wrap;
  overflow: hidden;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: relative;
  z-index: 1;
  padding: 32px 20px;
  border-bottom: 1px solid ${(props) => props.theme.color.grey_90};

  @keyframes open {
    from {
      padding: 0 20px;
      display: none;
    }
    to {
      padding: 32px 20px;
      display: block;
    }
  }
  @keyframes close {
    from {
      padding: 32px 20px;
      display: block;
    }
    to {
      display: none;
      padding: 0 20px;
    }
  }
  animation: ${(props) => props.isOpen && 'open 0.5s ease-in-out'};
  animation: ${(props) => !props.isOpen && 'close 0.1s ease-in-out'};
`;

const S = { Layout, Title, Body };

export default S;

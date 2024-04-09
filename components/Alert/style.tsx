import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color.grey_100};
  backdrop-filter: blur(40px);
  text-align: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const AlertPrompt = styled.div``;

const AlertHeadline = styled.div`
  padding-top: 35px;
  padding-bottom: 4px;
`;

const AlertBody = styled.div`
  width: 238px;
  padding: 0px 16px 35px 16px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  overflow-wrap: break-word;
  word-break: keep-all;
  p {
    flex-shrink: 0;
  }
`;

interface AlertButtonProps {
  yesColor?: string;
  noColor?: string;
}

const AlertButton = styled.div<AlertButtonProps>`
  button {
    width: 50%;
    border-top: 0.5px solid ${(props) => props.theme.color.grey_95};
    padding: 13px 0;
    color: ${(props) => props.theme.color.preferred};
    &.yes p {
      color: ${(props) => props.yesColor && props.theme.color[props.yesColor]};
      font-weight: 600 !important;
    }
    &.no p {
      color: ${(props) => props.noColor && props.theme.color[props.noColor]};
    }
  }
`;

const S = {
  Layout,
  AlertPrompt,
  AlertHeadline,
  AlertBody,
  AlertButton,
};

export default S;

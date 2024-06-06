import styled from 'styled-components';

interface LayoutProps {
  state?: Boolean;
}

const Layout = styled.div<LayoutProps>`
  display: flex;
  padding: 16px 0px;
  margin: 0px 20px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid
    ${(props) =>
      props.state ? props.theme.color.grey_100 : props.theme.color.grey_95};
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  .content {
    color: ${(props) => props.theme.color.grey_50};
    display: flex;
    align-items: center;
  }
`;

const IconSpan = styled.span`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  justify-content: center;

  //아이콘 크기
  svg {
    width: 100%;
    height: 100%;
  }
`;

const S = {
  Layout,
  TextWrap,
  IconSpan,
};

export default S;

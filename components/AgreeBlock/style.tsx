import styled from 'styled-components';

interface LayoutProps {
  state?: Boolean;
}

const Layout = styled.div<LayoutProps>`
  display: flex;
  padding: 16px 0px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid
    ${(props) =>
      props.state ? props.theme.color.grey_100 : props.theme.color.grey_95};
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 4px;
  width: 100%;

  .title {
    flex: 1 0 0;
  }

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

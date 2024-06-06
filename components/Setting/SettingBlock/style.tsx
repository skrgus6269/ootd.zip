import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  .title {
    flex: 1 0 0;
  }

  .settingEmail {
    color: ${(props) => props.theme.color.grey_70};
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
    width: 10px;
    height: 10px;
  }
`;

const S = {
  Layout,
  IconSpan,
};

export default S;

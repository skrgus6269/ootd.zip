import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  padding: 24px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;

const IconSpan = styled.span`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;

  //아이콘 크기
  svg {
    width: 20px;
    height: 20px;
  }
`;

interface OpenTagProps {
  state: Boolean;
}

const OpenTag = styled.div<OpenTagProps>`
  display: inline-flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.state ? props.theme.color.orange_100 : props.theme.color.orange_500};
`;

const S = {
  Layout,
  Container,
  Category,
  IconSpan,
  OpenTag,
};

export default S;

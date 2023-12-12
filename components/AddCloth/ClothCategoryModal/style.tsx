import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;

  h3 {
    padding: 23px 20px;
  }
  overflow-y: hidden;

  button {
    margin: 16px 20px 59px 20px;
  }
`;

const Category = styled.div`
  display: flex;
  height: 60%;
  margin-bottom: 16px;
  p {
    width: 163px;
    padding: 12px 8px 12px 24px;
  }
`;

const BigCategory = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: scroll;
`;

interface CategorySpanProps {
  state: Boolean;
}

const BigCategorySpan = styled.div<CategorySpanProps>`
  width: 100%;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_95 : props.theme.color.grey_100};
`;

const SmallCategory = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.color.grey_95};
`;

const SmallCategorySpan = styled.div<CategorySpanProps>`
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_80 : props.theme.color.grey_95};
`;

const S = {
  Layout,
  Category,
  BigCategory,
  BigCategorySpan,
  SmallCategory,
  SmallCategorySpan,
};

export default S;

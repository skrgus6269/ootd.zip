import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CategorySpanProps {
  state: Boolean;
}

interface LayoutProps {
  addTag: Boolean;
}

const Layout = styled.div`
  padding-top: 8px;
  .toast {
    bottom: 24px;
  }
`;

const Background = styled.div<LayoutProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.addTag ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 998;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const MyCloset = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 16px 20px 0 20px;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  display: flex;
  gap: 8px;
`;

const CategorySpan = styled.div<CategorySpanProps>`
  display: inline;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_100};
  color: ${(props) =>
    !props.state ? props.theme.color.grey_00 : props.theme.color.grey_100};
  padding: 8px 16px;
  border: ${(props) =>
    !props.state ? `1px solid ${props.theme.color.grey_80}` : 'none'};
  border-radius: 17px;
  flex-shrink: 0;
`;

interface IsOpenProps {
  state: Boolean;
}

const IsOpenSpan = styled.div<IsOpenProps>`
  display: inline;
  padding: 8px 16px;
  border-radius: 17px;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
  color: ${(props) =>
    !props.state ? props.theme.color.grey_00 : props.theme.color.grey_100};
  flex-shrink: 0;
  border: ${(props) =>
    !props.state && `1px solid ${props.theme.color.grey_80}`};
  .hidden {
    color: ${(props) => props.theme.color.grey_100};
  }
`;

const SearchFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: scroll;
  padding: 16px 0 24px 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 34px;
  background-color: ${(props) => props.theme.color.grey_90};
  flex-shrink: 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
  height: 30%;
  overflow-y: scroll;
  hr {
    width: 100%;
    border: none;
    border-top: 0.5px solid ${(props) => props.theme.color.grey_90};
    margin: 0;
  }
`;

const S = {
  Layout,
  Background,
  Category,
  List,
  MyCloset,
  CategorySpan,
  IsOpenSpan,
  SearchFilter,
  Divider,
};

export default S;

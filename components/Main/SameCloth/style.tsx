import styled from 'styled-components';

interface FilterProps {
  state: Boolean;
}

const Layout = styled.div``;

const Label = styled.div`
  .body {
    color: ${(props) => props.theme.color.grey_50};
    padding: 7px 0 28px 0;
  }
`;

const Filter = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 16px;
`;

const FilterItem = styled.div<FilterProps>`
  height: 56px;
  width: 56px;
  display: flex;
  gap: 6px;
  background-color: ${(props) => props.theme.color.grey_95};
  border-radius: 50%;

  .filterItemTrue {
    width: 100px;
  }

  h5 {
    color: ${(props) => props.theme.color.grey_00};
  }

  p {
    color: ${(props) => props.theme.color.grey_50};
  }

  img {
    border-radius: 50%;
  }

  ${({ state }) =>
    state
      ? `
        width: 167px;
        border-radius: 200px; 
        .filterItemTrue {  
            display: flex;
            flex-direction: column;
            justify-content:center;
        }
    `
      : `
    .filterItemTrue { 
        display: none; 
}`}
`;

const List = styled.div`
  width: 100%;
  img {
    max-width: 350px;
    max-height: 350px;
    width: 100%;
    object-fit: cover;
    margin-top: 6px;
  }

  .flexList {
    display: flex;
    gap: 6px;
    max-width: 113px;
    max-height: 113px;
    width: 32%;
  }
  margin-bottom: 28px;
`;

const S = { Layout, Label, Filter, List, FilterItem };

export default S;

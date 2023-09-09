import styled from 'styled-components';

const FlexSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.div`
  z-index: 2;
  width: 160px;
  text-align: center;
  background-color: skyblue;
`;

const Options = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.color.grey_100};
  z-index: 4;
  overflow-y: scroll;
  width: 160px;
  height: 100px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const DefaultOption = styled(FlexSpan)`
  width: 160px;
  height: 24px;
`;

const Option = styled(FlexSpan)`
  height: 24px;
  :hover {
    background-color: ${(props) => props.theme.color.grey_90};
  }
`;

export { Select, Options, DefaultOption, Option };

import styled from 'styled-components';

interface LayoutProps {
  addTag: Boolean;
}

const Layout = styled.div`
  padding: 0 20px;
  .nextButton {
    position: fixed;
    bottom: 25px;
    width: calc(100% - 40px);
  }
`;

const Label = styled.div`
  h2 {
    padding: 33px 0 22px 0;
    flex-grow: 1;
  }

  display: flex;
  align-items: center;
  position: relative;
  margin: 0 0 16px 0;

  svg {
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
  }
`;

const CheckBox = styled.div`
  .helperText {
    margin: 16px 0;
  }
`;

const Dragger = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px 0;
`;

const DraggerBar = styled.div`
  width: 36px;
  height: 5.333px;
  border-radius: 2.5px;
  background: var(
    --labels-vibrant-tertiary,
    linear-gradient(0deg, rgba(61, 61, 61, 0.5) 0%, rgba(61, 61, 61, 0.5) 100%),
    rgba(127, 127, 127, 0.4)
  );
`;

const S = { Layout, Label, CheckBox, Dragger, DraggerBar };

export default S;

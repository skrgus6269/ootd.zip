import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px);
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 38px;
  margin-bottom: 88px;
`;

const Progress = styled.div`
  display: flex;
  gap: 4px;
  .number {
    width: 24px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  .nextButton {
    padding-bottom: 26px;
  }
`;

const Step = styled.div`
  color: ${(props) => props.theme.color.grey_90};
`;

const ActiveStep = styled(Step)`
  color: #fff;
  color: ${(props) => props.theme.color.grey_00};
`;

const StepLayout = styled.div``;

const S = { Layout, Step, ActiveStep, ProgressBar, Main, Progress, StepLayout };

export default S;

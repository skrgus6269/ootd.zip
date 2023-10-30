import {
  Layout,
  AppBarLeft,
  AppBarMiddle,
  AppBarRight,
  RightTouch,
  LeftTouch,
} from './style';

interface AppBarPoprs {
  leftProps: React.ReactElement;
  middleProps: React.ReactElement;
  rightProps: React.ReactElement;
}

export default function AppBar(props: AppBarPoprs) {
  return (
    <Layout>
      <AppBarLeft>
        <LeftTouch>{props.leftProps}</LeftTouch>
      </AppBarLeft>
      <AppBarMiddle>{props.middleProps}</AppBarMiddle>
      <AppBarRight>
        <RightTouch>{props.rightProps}</RightTouch>
      </AppBarRight>
    </Layout>
  );
}

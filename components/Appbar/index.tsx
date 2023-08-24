import { Layout, AppBarLeft, AppBarMiddle, AppBarRight } from './style';

interface AppBarPoprs {
  leftProps: React.ReactElement;
  middleProps: React.ReactElement;
  rightProps: React.ReactElement;
}

export default function AppBar(props: AppBarPoprs) {
  return (
    <Layout>
      <AppBarLeft>{props.leftProps}</AppBarLeft>
      <AppBarMiddle>{props.middleProps}</AppBarMiddle>
      <AppBarRight>{props.rightProps}</AppBarRight>
    </Layout>
  );
}

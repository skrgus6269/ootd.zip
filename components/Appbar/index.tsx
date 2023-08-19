import { Layout, AppbarLeft, AppbarMiddle, AppbarRight } from './style';

interface AppbarPoprs {
  leftProps: React.ReactElement;
  middleProps: React.ReactElement;
  rightProps: React.ReactElement;
}

export default function Appbar(props: AppbarPoprs) {
  return (
    <Layout>
      <AppbarLeft>{props.leftProps}</AppbarLeft>
      <AppbarMiddle>{props.middleProps}</AppbarMiddle>
      <AppbarRight>{props.rightProps}</AppbarRight>
    </Layout>
  );
}

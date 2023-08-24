import { Body4, Headline4 } from '@/components/UI';
import { CardComponentProps } from '../type';
import Card from '../CardLayout';
import { Layout } from './style';

export default function MainTopClothCard(props: CardComponentProps) {
  return (
    <Card data={props.data} size="137px">
      <Layout>
        <Headline4>{props.headline}</Headline4>
        <Body4>{props.body}</Body4>
      </Layout>
    </Card>
  );
}

import { Body2, Headline2 } from '@/components/UI';
import { CardComponentProps } from '../type';
import Card from '../CardLayout';
import { Layout } from './style';

export default function MainTopClothCard(props: CardComponentProps) {
  return (
    <Card data={props.data} size="137px">
      <Layout>
        <Headline2>{props.headline}</Headline2>
        <Body2>{props.body}</Body2>
      </Layout>
    </Card>
  );
}

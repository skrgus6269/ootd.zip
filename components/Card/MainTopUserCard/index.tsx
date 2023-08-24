import { Body2, Headline2 } from '@/components/UI';
import { CardComponentProps } from '../type';
import Card from '../CardLayout';

export default function MainTopClothCard(props: CardComponentProps) {
  return (
    <Card data={props.data} size="137px">
      <Headline2>{props.headline}</Headline2>
      <Body2>{props.body}</Body2>
    </Card>
  );
}

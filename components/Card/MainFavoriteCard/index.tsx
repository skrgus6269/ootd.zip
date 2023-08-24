import { Callout3 } from '@/components/UI';
import { CardComponentProps } from '../type';
import Card from '../CardLayout';
import { Layout } from './style';
import { AiOutlineHeart } from 'react-icons/ai';

export default function MainFavoriteCard(props: CardComponentProps) {
  return (
    <Card data={props.data} size="228px">
      <Layout>
        <Callout3>{props.callout}</Callout3>
        {/*button -> LikeButton으로 교체 예정 */}
        <button>
          <AiOutlineHeart />
        </button>
        {/*----------------------------------- */}
      </Layout>
    </Card>
  );
}

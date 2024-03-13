import { Body3 } from '@/components/UI';
import Card from '../CardLayout';
import { Layout } from './style';
import LikeToggle from '@/components/Toggle/LikeToggle';
import { useState } from 'react';

export interface MainFavoriteCardProps {
  userId: number;
  userName: string;
  ootdImage: string;
  ootdId: number;
  onClick?: () => void;
}

export default function MainFavoriteCard({
  userId,
  userName,
  ootdId,
  ootdImage,
  onClick,
}: MainFavoriteCardProps) {
  const [favoriteState, setFavoriteState] = useState<Boolean>(true);

  return (
    <Card
      onClick={onClick}
      data={{ src: ootdImage, alt: 'ootdimage', caption: '' }}
      size="228px"
    >
      <Layout>
        <Body3 className="userName">{userName}</Body3>
        <LikeToggle
          state={favoriteState}
          setState={setFavoriteState}
          onClick={() => ''}
        />
      </Layout>
    </Card>
  );
}

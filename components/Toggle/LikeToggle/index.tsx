import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { LikeToggleLayout } from './style';
import theme from '@/styles/theme';

export default function LikeToggle() {
  const [state, setState] = useState<Boolean>(false);

  const onClickLikeButton = () => {
    setState(!state);
  };

  return (
    <LikeToggleLayout>
      {state && (
        <AiFillHeart onClick={onClickLikeButton} style={{ color: 'red' }} />
      )}
      {!state && (
        <AiOutlineHeart
          onClick={onClickLikeButton}
          style={{ color: theme.color.grey_90 }}
        />
      )}
    </LikeToggleLayout>
  );
}

import { Dispatch, SetStateAction } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { LikeToggleLayout } from './style';
import theme from '@/styles/theme';

interface LikeToggleProps {
  state: Boolean;
  setState: Dispatch<SetStateAction<Boolean>>;
  onClick: () => void;
}

export default function LikeToggle({
  state,
  setState,
  onClick,
}: LikeToggleProps) {
  const onClickLikeButton = () => {
    onClick();
    setState(!state);
  };

  return (
    <LikeToggleLayout>
      {state && (
        <AiFillHeart onClick={onClickLikeButton} style={{ color: 'red' }} />
      )}
      {!state && <AiOutlineHeart onClick={onClickLikeButton} />}
    </LikeToggleLayout>
  );
}

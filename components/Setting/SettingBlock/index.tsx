/* eslint-disable @next/next/no-img-element */
import S from './style';
import { Body3 } from '@/components/UI';
import { AiOutlineRight } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface SettingBlockProps {
  text: string;
  buttonClick?: () => void;
  shareButton?: () => void;
}

const SettingBlock = ({
  text,
  buttonClick,
  shareButton,
}: SettingBlockProps) => {
  const router = useRouter();

  return (
    <S.Layout onClick={buttonClick}>
      <Body3 style={{ flex: '1 0 0' }}>{text}</Body3>
      {buttonClick ? (
        <S.IconSpan>
          <AiOutlineRight />
        </S.IconSpan>
      ) : (
        <Body3 onClick={shareButton} style={{ color: '#B1B1B1' }}>
          ootdzip@gmail.com
        </Body3>
      )}
    </S.Layout>
  );
};

export default SettingBlock;

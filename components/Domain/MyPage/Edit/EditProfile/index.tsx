import S from './style';
import { Caption1 } from '@/components/UI';

export default function EditProfile() {
  return (
    <>
      <S.Layout>
        <img src={'/images/권낙현.jpg'} alt="유저 이미지" />
        <Caption1 style={{ color: '#8B8B8B' }}>사진 입력</Caption1>
      </S.Layout>
    </>
  );
}

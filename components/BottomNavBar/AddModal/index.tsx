import { AiFillCamera, AiFillSkin } from 'react-icons/ai';
import S from './style';
import { Button3 } from '@/components/UI';
import { useRouter } from 'next/router';
export default function AddModal() {
  const router = useRouter();

  return (
    <S.Layout>
      <S.OOTD onClick={() => router.push('/AddOOTD')}>
        <AiFillCamera />
        <Button3>OOTD</Button3>
      </S.OOTD>
      <S.Closet onClick={() => router.push('/AddCloth')}>
        <AiFillSkin />
        <Button3>의류</Button3>
      </S.Closet>
    </S.Layout>
  );
}

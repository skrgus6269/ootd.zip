/* eslint-disable @next/next/no-img-element */
import S from './style';
import { Button3 } from '@/components/UI';
import { useRouter } from 'next/router';
import AccentCloth from '@/public/images/AccentCloth.svg';
import AccentOOTD from '@/public/images/AccentOOTD.svg';
export default function AddModal() {
  const router = useRouter();

  return (
    <S.Layout>
      <S.OOTD onClick={() => router.push('/add-ootd')}>
        <AccentOOTD fill="black" />
        <Button3>OOTD</Button3>
      </S.OOTD>
      <S.Closet onClick={() => router.push('/add-cloth')}>
        <AccentCloth />
        <Button3>의류</Button3>
      </S.Closet>
    </S.Layout>
  );
}

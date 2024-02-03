import { useFunnel } from '@/hooks/use-funnel';
import S from './style';
import EditProfile from './EditProfile';
import EditMyInfo from './EditMyInfo';

export default function Closet() {
  return (
    <>
      <S.Layout>
        <EditProfile />
        <EditMyInfo />
      </S.Layout>
    </>
  );
}

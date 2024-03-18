import { SyncLoader } from 'react-spinners';
import S from './style';
import theme from '@/styles/colors/index';
export default function Spinner() {
  return (
    <S.Layout>
      <SyncLoader className="spinner" color={theme.correct} />
    </S.Layout>
  );
}

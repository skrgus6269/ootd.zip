import Alert from '@/components/Alert';
import { Body3, Title1 } from '@/components/UI';

interface AddClothAlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
}

export default function AddClothAlert({
  onClickNoButton,
  onClickYesButton,
}: AddClothAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline="추가정보...입력하지 않을래?"
      body={
        <>
          <Body3>추가정보...입력하면 좋을텐데...</Body3>
          <Body3>우리가 세탁법 추천도 해주고...</Body3>
          <Body3>안 한다고 하면 옷은 그냥 등록해도돼..</Body3>
        </>
      }
      yes={'할래'}
      no={'안할래'}
    />
  );
}

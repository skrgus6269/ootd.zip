import Alert from '@/components/Alert';
import { Body3, Title1 } from '@/components/UI';

interface BlockAlertProps {
  blockUserName: string;
  onClickYesButton: () => void;
  onClickNoButton: () => void;
}

export default function BlockAlert({
  blockUserName,
  onClickNoButton,
  onClickYesButton,
}: BlockAlertProps) {
  return (
    <Alert
      onClickYesButton={onClickYesButton}
      onClickNoButton={onClickNoButton}
      headline={<Title1>{blockUserName}님을 차단하시겠습니까?</Title1>}
      body={
        <>
          <Body3>해당 유저의 프로필 및 콘텐츠가 표시되지 않</Body3>
          <Body3>습니다. 부적절한 사용자의 경우 신고 기능을</Body3>
          <Body3>이용해주시기 바랍니다.</Body3>
        </>
      }
      yes={'차단'}
      no={'닫기'}
    />
  );
}

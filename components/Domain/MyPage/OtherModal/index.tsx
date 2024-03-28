import ActionSheet from '@/components/ActionSheet';
import { useState } from 'react';
import BlockAlert, { BlockAlertProps } from '../BlockAlert';

export default function OtherModal({
  blockUserName,
  onClickNoButton,
  onClickYesButton,
}: BlockAlertProps) {
  const [blockAlertState, setBlockAlertState] = useState<Boolean>(false);

  const buttons = [
    { name: '사용자 차단', buttonClick: () => setBlockAlertState(true) },
  ];
  return (
    <>
      <ActionSheet buttons={buttons} />
      {blockAlertState && (
        <BlockAlert
          blockUserName={blockUserName}
          onClickNoButton={onClickNoButton}
          onClickYesButton={onClickYesButton}
        />
      )}
    </>
  );
}

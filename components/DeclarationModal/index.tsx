import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button3, Caption1, Title1 } from '../UI';
import WithdrawBlock from '../Setting/WithdrawBlock';

interface DeclarationModalProps {
  declaration: Boolean;
  setDeclaration: Dispatch<SetStateAction<Boolean>>;
  setReceivedDeclaration: Dispatch<SetStateAction<Boolean>>;
}

export default function DeclarationModal({
  declaration,
  setDeclaration,
  setReceivedDeclaration,
}: DeclarationModalProps) {
  const [checks, setChecks] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [possible, setPossible] = useState<boolean>(false);

  useEffect(() => {
    setPossible(checks.some((check) => check));
  }, [checks]);

  const withdrawBlockTitles: string[] = [
    '판매 또는 직거래 유도',
    '비방, 명예훼손 또는 수치심 유발',
    '혐오적, 외설적, 범죄적 행위 등 공공질서 및 미풍양속 위반',
    '서비스에 대한 허위 및 오해의 소지가 있는 행동',
    '저작권 위반, 개인정보 노출 등 권리침해 우려',
    '정치적, 종교적 분쟁 야기',
    '스팸 또는 지나치게 상업적인 내용',
    '개인정보 도용, 사칭 또는 타인의 정보를 무단 위변조',
  ];

  return (
    <Modal isOpen={declaration} height="90">
      <S.Layout>
        <S.Header>
          <AiOutlineClose
            onClick={() => setDeclaration(false)}
            className="close"
          />
        </S.Header>
        <S.Frame>
          <Title1>@user님의</Title1>
          <Title1>게시글을 신고합니다.</Title1>
          <Caption1 style={{ color: '#8B8B8B' }}>
            아래에서 신고 사유를 선택해주세요. 회원님의 신고는 익명으로
            처리됩니다.
          </Caption1>
        </S.Frame>
        {withdrawBlockTitles.map((item, index) => (
          <WithdrawBlock
            key={index}
            title={withdrawBlockTitles[index]}
            checked={checks[index]}
            setChecked={() => {
              const newChecks = [...checks];
              newChecks[index] = !newChecks[index];
              setChecks(newChecks);
            }}
          />
        ))}
        <S.Button
          state={possible}
          onClick={() => {
            setReceivedDeclaration(true);
            setDeclaration(false);
          }}
        >
          <Button3>신고하기</Button3>
        </S.Button>
      </S.Layout>
    </Modal>
  );
}

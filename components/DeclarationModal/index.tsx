import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button3, Caption1, Title1 } from '../UI';
import WithdrawBlock from '../Setting/WithdrawBlock';
import ReportApi from '@/apis/domain/Report/ReportApi';

export type withdrawBlockType = {
  id: number;
  message: string;
}[];

interface DeclarationModalProps {
  type: string;
  ID: number;
  declaration: Boolean;
  setDeclaration: Dispatch<SetStateAction<Boolean>>;
  setReceivedDeclaration: Dispatch<SetStateAction<Boolean>>;
  setReportStatus: Dispatch<SetStateAction<Boolean>>;
}

export default function DeclarationModal({
  type,
  ID,
  declaration,
  setDeclaration,
  setReceivedDeclaration,
  setReportStatus,
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

  const { getReport, postReport } = ReportApi();

  const [withdrawBlockTitles, setWithdrawBlockTitles] =
    useState<withdrawBlockType>([]);

  useEffect(() => {
    const fetchReport = async () => {
      const report = await getReport();

      setWithdrawBlockTitles(report);
    };

    fetchReport();
  }, []);

  const onClickDeclarationButton = async () => {
    const trueIndices: number[] = checks.reduce(
      (acc: number[], currentValue: boolean, currentIndex: number) => {
        if (currentValue === true) {
          acc.push(currentIndex);
        }
        return acc;
      },
      []
    );

    const payload = {
      reportIds: trueIndices,
      targetId: Number(ID),
      reportType: type,
    };

    console.log(payload);

    const addReportSuccess = await postReport(payload);

    if (
      addReportSuccess.response &&
      addReportSuccess.response.data.divisionCode === 'R002'
    ) {
      setReceivedDeclaration(true); // 차단 모달 열기
      setDeclaration(false); // 신고하기 모달 닫기
      setReportStatus(false);
    } else if (
      addReportSuccess.result &&
      addReportSuccess.result.id &&
      addReportSuccess.result.reportCount > 0
    ) {
      setReceivedDeclaration(true); // 차단 모달 열기
      setDeclaration(false); // 신고하기 모달 닫기
      setReportStatus(true);
    } else {
      alert('신고 실패');
    }
  };

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
          {type === 'COMMENT' ? (
            <Title1>댓글을 신고합니다.</Title1>
          ) : (
            <Title1>게시글을 신고합니다.</Title1>
          )}
          <Caption1 style={{ color: '#8B8B8B' }}>
            아래에서 신고 사유를 선택해주세요. 회원님의 신고는 익명으로
            처리됩니다.
          </Caption1>
        </S.Frame>
        {withdrawBlockTitles.map((item, index) => (
          <WithdrawBlock
            key={item.id}
            title={item.message}
            checked={checks[item.id]}
            setChecked={() => {
              const newChecks = [...checks];
              newChecks[item.id] = !newChecks[item.id];
              setChecks(newChecks);
            }}
          />
        ))}
        <S.Button state={possible} onClick={onClickDeclarationButton}>
          <Button3>신고하기</Button3>
        </S.Button>
      </S.Layout>
    </Modal>
  );
}

import AppBar from '@/components/Appbar';
import S from '@/pageStyle/with-draw/style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Button3, Headline2 } from '@/components/UI';
import WithdrawBlock from '@/components/Setting/WithdrawBlock';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Dot from 'public/images/dot.svg';
import WithdrawAlert from '@/components/Setting/WithdrawAlert';

export default function Withdraw() {
  const router = useRouter();

  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [check3, setCheck3] = useState<boolean>(false);
  const [check4, setCheck4] = useState<boolean>(false);

  const [possible, setPossible] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<Boolean>(false);

  useEffect(() => {
    if (check1 && check2 && check3 && check4) {
      setPossible(true);
    } else {
      setPossible(false);
    }
  }, [check1, check2, check3, check4]);

  const onClickYesButton = () => {
    setAlertOpen(false);
  };

  const onClickNoButton = () => {
    router.push('/onboarding');
  };

  const onClickBackground = () => {
    if (alertOpen) setAlertOpen(false);
  };

  return (
    <>
      <S.Background isOpen={alertOpen} onClick={onClickBackground} />
      <S.Layout>
        <AppBar
          leftProps={
            <AiOutlineArrowLeft
              onClick={() => router.back()}
              className="arrowleft"
            />
          }
          middleProps={<></>}
          rightProps={<></>}
        />
        <Headline2
          style={{
            marginTop: '32px',
            marginLeft: '20px',
            marginBottom: '40px',
          }}
        >
          탈퇴하기 전에 <br />
          확인하세요.
        </Headline2>
        <WithdrawBlock
          title="탈퇴하면 회원님의 프로필 및 모든 콘텐츠가 삭제됩니다."
          content="탈퇴 시점으로부터 1개월(탈퇴 유예기간) 후 모든 정보가 파기됩니다. 유예기간 동안 다른 사용자가 회원님의 프로필 및 콘텐츠를 조회할 수 없습니다."
          checked={check1}
          setChecked={setCheck1}
        />
        <WithdrawBlock
          title="탈퇴 시점으로부터 1개월 이내에 재로그인으로 계정을 복구할 수 있습니다."
          checked={check2}
          setChecked={setCheck2}
        />
        <WithdrawBlock
          title="동일한 계정으로 재가입은 탈퇴 시점으로부터 1년이 경과한 후 가능합니다."
          checked={check3}
          setChecked={setCheck3}
        />
        <WithdrawBlock
          title="아래 경우에 해당할 경우 탈퇴 및 재가입이 제한됩니다."
          content={
            <>
              <img src={'/images/dot.svg'} alt="Dot" width={16} height={16} />
              신고 누적으로 인해 활동이 정지된 계정
            </>
          }
          content2={
            <>
              <br />
              <img src={'/images/dot.svg'} alt="Dot" width={16} height={16} />
              패널티 규정을 위해 소셜로그인 이메일 보관: 1년
            </>
          }
          checked={check4}
          setChecked={setCheck4}
        />

        <S.Button state={possible} onClick={() => setAlertOpen(true)}>
          <Button3>모두 확인하였고, 동의합니다.</Button3>
        </S.Button>
        {alertOpen && (
          <WithdrawAlert
            onClickYesButton={onClickYesButton}
            onClickNoButton={onClickNoButton}
          />
        )}
      </S.Layout>
    </>
  );
}

import AppBar from '@/components/Appbar';
import S from '@/pageStyle/like-info/style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Button3, Title1 } from '@/components/UI';
import { useEffect, useState } from 'react';
import GenderInput from '@/components/Domain/SignUp/GenderInput';
import LikeInfoStyleInput from '@/components/Domain/Setting/LikeInfo';
import { Style } from '../add-ootd';
import { UserApi } from '@/apis/domain/User/UserApi';

export default function LikeInfo() {
  const router = useRouter();

  const [gender, setGender] = useState<Boolean>(true);

  const [selectedStyle, setSelectedStyle] = useState<Style[]>([]);

  const [possible, setPossible] = useState<Boolean>(false);

  useEffect(() => {
    setPossible(true);
  }, []);

  return (
    <>
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

        <S.Breadcrumb>
          <S.BreadcrumbText state={false}>
            <Title1>01.</Title1>
            <Title1>기본정보</Title1>
          </S.BreadcrumbText>
          <S.BreadcrumbText state={false}>
            <Title1>02.</Title1>
            <Title1>체형정보</Title1>
          </S.BreadcrumbText>
          <S.BreadcrumbText state={true}>
            <Title1>03.</Title1>
            <Title1>취향정보</Title1>
          </S.BreadcrumbText>
        </S.Breadcrumb>

        <S.SexContent>
          <GenderInput gender={gender} setGender={setGender} />
        </S.SexContent>

        <S.StyleContent>
          <LikeInfoStyleInput
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </S.StyleContent>

        <S.Button state={possible}>
          <Button3>수정 완료</Button3>
        </S.Button>
      </S.Layout>
    </>
  );
}

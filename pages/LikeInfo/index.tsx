import AppBar from '@/components/Appbar';
import S from './style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Button3, Title1 } from '@/components/UI';
import Header from '@/components/Header';
import SettingBlock from '@/components/Setting/SettingBlock';
import { useEffect, useState } from 'react';
import GenderInput from '@/components/Domain/SignUp/GenderInput';
import StyleInput from '@/components/Domain/SignUp/StyleInput';
import { styleList } from '@/constants/business.constants';

export default function LikeInfo() {
  interface Style {
    value: Boolean;
    tag: string;
  }

  const router = useRouter();

  const [gender, setGender] = useState<string>('남자');
  const styleListInitial = styleList.map((item) => {
    return { value: false, tag: item } as Style;
  });
  const [styleListState, setStyleListState] =
    useState<Style[]>(styleListInitial);

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
          <StyleInput
            setStyleListState={setStyleListState}
            styleListState={styleListState}
          />
        </S.StyleContent>

        <S.Button state={possible}>
          <Button3>수정 완료</Button3>
        </S.Button>
      </S.Layout>
    </>
  );
}

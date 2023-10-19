import React, { FC, useEffect, useState } from 'react';
import { useFunnel } from '@/hooks/use-funnel';
import BasicInfo from './BasicInfo';
import BodyInfo from './BodyInfo';
import StyleInfo from './StyleInfo';
import NextButton from '@/components/SignUp/NextButton';
import S from './style';
import Headline from '@/components/UI/TypoGraphy/Headline3';
import AppBar from '@/components/Appbar';
import { AppLayoutProps } from '@/AppLayout';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface ComponentWithLayout extends FC {
  Layout?: FC<AppLayoutProps>;
}

interface Style {
  value: Boolean;
  tag: string;
}

const SignUp: ComponentWithLayout = () => {
  const steps = ['기본정보', '체형정보', '취향정보'];
  const [Funnel, currentStep, handleStep] = useFunnel(steps);
  const [id, setId] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [open, setOpen] = useState<string>('공개');
  const [gender, setGender] = useState<string>('남자');
  const [canUseId, setCanUseId] = useState<Boolean>(false);
  const [basicState, setBasicState] = useState<Boolean>(false);
  const [bodyState, setBodyState] = useState<Boolean>(false);
  const [styleState, setStyleState] = useState<Boolean>(false);
  const [selectedStyle, setSelectedStyle] = useState<string[]>();
  const styleList = [
    '미니멀',
    '아메카지',
    '시티보이',
    '캐주얼',
    '스트릿',
    '비즈니스 캐주얼',
    '하이틴',
    '로맨틱',
    '걸리시',
    '스포티',
    '비즈니스 캐주얼',
    '하이틴',
    '로맨틱',
    '걸리시',
    '스포티',
    '비즈니스 캐주얼',
    '하이틴',
    '로맨틱',
    '걸리시',
    '스포티',
  ];

  const styleListInitial = styleList.map((item) => {
    return { value: false, tag: item } as Style;
  });

  const [styleListState, setStyleListState] =
    useState<Style[]>(styleListInitial);

  useEffect(() => {
    const canAdvanceBasicState = canUseId && age.length > 0;

    const canAdvanceBodyState = weight.length > 0 && height.length > 0;

    const selectedStyles = styleListState
      .filter((item) => item.value === true)
      .map((item) => item.tag);

    const canAdvanceStyleState = selectedStyles.length >= 3;

    setBasicState(canAdvanceBasicState);
    setBodyState(canAdvanceBodyState);
    setStyleState(canAdvanceStyleState);
    setSelectedStyle(selectedStyles);
  }, [canUseId, age, weight, height, styleListState]);

  const onClickSubmitButton = () => {
    console.log({
      id,
      age,
      height,
      weight,
      open,
      gender,
      selectedStyle,
    });
  };
  return (
    <S.Layout>
      <AppBar
        leftProps={<AiOutlineArrowLeft />}
        middleProps={<Headline>회원가입</Headline>}
        rightProps={<></>}
      />
      <Funnel>
        <S.ProgressBar>
          {steps.map((stepName, index) =>
            // 스타일 컴포넌트를 사용하여 스타일 적용
            currentStep === stepName ? (
              <S.ActiveStep key={stepName}>
                {' '}
                <S.Progress>
                  <div className="number">
                    <Headline>0{index + 1}.</Headline>
                  </div>
                  <Headline>{stepName}</Headline>
                </S.Progress>
              </S.ActiveStep>
            ) : (
              <S.Step key={stepName}>
                <S.Progress>
                  <div className="number">
                    <Headline>0{index + 1}.</Headline>
                  </div>
                  <Headline>{stepName}</Headline>
                </S.Progress>
              </S.Step>
            )
          )}
        </S.ProgressBar>
        <S.Main>
          <Funnel.Steps name="기본정보">
            <BasicInfo
              setId={setId}
              setAge={setAge}
              setCanUseId={setCanUseId}
            />
            <NextButton
              state={basicState}
              onClick={() => handleStep('체형정보')}
            />
          </Funnel.Steps>
          <Funnel.Steps name="체형정보">
            <BodyInfo
              heightSetState={setHeight}
              weightSetState={setWeight}
              open={open}
              setOpen={setOpen}
            />
            <NextButton
              state={bodyState}
              onClick={() => handleStep('취향정보')}
            />
          </Funnel.Steps>
          <Funnel.Steps name="취향정보">
            <StyleInfo
              gender={gender}
              setGender={setGender}
              setStyleListState={setStyleListState}
              styleListState={styleListState}
            />
            <NextButton state={styleState} onClick={onClickSubmitButton} />
          </Funnel.Steps>
        </S.Main>
      </Funnel>
    </S.Layout>
  );
};

export default SignUp;

SignUp.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

SignUp.Layout.displayName = 'NameLayout';

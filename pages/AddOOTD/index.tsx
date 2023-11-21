import Gallery from '@/components/Gallery';
import { useFunnel } from '@/hooks/use-funnel';
import ClothTag from './ClothTag';
import WriteOOTD from './WriteOOTD';
import { useEffect, useState } from 'react';
import { AppLayoutProps } from '@/AppLayout';
import { ComponentWithLayout } from '../sign-up';
import { ImageWithTag } from '@/components/AddItem/TagModal';
import AppBar from '@/components/Appbar';
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import { Button1, Headline3 } from '@/components/UI';
import { useRouter } from 'next/router';
import { styleList } from '@/constants/business.constants';
import theme from '@/styles/theme';

export interface Style {
  tag: string;
  value: Boolean;
}

const AddOOTD: ComponentWithLayout = () => {
  const steps = ['미리보기', '의류태그', '게시하기'];
  const [Funnel, currentStep, handleStep] = useFunnel(steps);
  const [imageAndTag, setImageAndTag] = useState<ImageWithTag | undefined>([]); //이미지 + 태그
  const [gender, setGender] = useState('남성'); //성별
  const [string, setString] = useState(''); //게시글
  const styleListInitial = styleList.map((item) => {
    return { value: false, tag: item } as Style;
  });
  const [style, setStyle] = useState<Style[]>(styleListInitial); //스타일
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [open, setOpen] = useState('공개'); //공개여부
  const [complete, setComplete] = useState<Boolean>(false); //게시 완료 여부
  const router = useRouter();

  //앱바 왼쪽 네비게이션 관리
  const LeftPropsContent = () => {
    if (currentStep === '미리보기') {
      return <AiOutlineClose onClick={onClickAppbarLeftButton} />;
    } else {
      return <AiOutlineArrowLeft onClick={onClickAppbarLeftButton} />;
    }
  };

  //앱바 왼쪽 네비게이션 클릭
  const onClickAppbarLeftButton = () => {
    if (currentStep === '미리보기') {
      router.push('/name');
    } else if (currentStep === '의류태그') {
      handleStep('미리보기');
    } else {
      handleStep('의류태그');
    }
  };

  //앱바 오른쪽 네비게이션 관리
  const RightPropsContent = () => {
    if (currentStep === '의류태그') {
      return <Button1 onClick={onClickAppbarRightButton}>건너뛰기</Button1>;
    }
    if (complete) {
      return <Button1 onClick={onClickAppbarRightButton}>등록</Button1>;
    } else {
      return (
        <Button1 style={{ color: `${theme.color.grey_90}` }}>등록</Button1>
      );
    }
  };

  //앱바 오른쪽 네비게이션 클릭
  const onClickAppbarRightButton = () => {
    if (currentStep === '의류태그') {
      handleStep('게시하기');
    } else {
      //OOTD 게시
      console.log({
        imageAndTag,
        gender,
        string,
        selectedStyle,
        open,
      });
    }
  };

  //등록완료 조건
  useEffect(() => {
    if (string.length && imageAndTag?.length && selectedStyle?.length) {
      setComplete(true);
      return;
    }
    setComplete(false);
  }, [string, imageAndTag, selectedStyle]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <AppBar
        leftProps={<LeftPropsContent />}
        middleProps={<Headline3>{currentStep}</Headline3>}
        rightProps={<RightPropsContent />}
      />
      <Funnel>
        <Funnel.Steps name="미리보기">
          {/* <Gallery
            setImageAndTag={setImageAndTag}
            imageAndTag={imageAndTag!}
            handleStep={handleStep}
          /> */}
          <WriteOOTD
            imageAndTag={imageAndTag!}
            gender={gender}
            setGender={setGender}
            string={string}
            setString={setString}
            style={style}
            setStyle={setStyle}
            open={open}
            setOpen={setOpen}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </Funnel.Steps>
        <Funnel.Steps name="의류태그">
          <ClothTag
            setImageAndTag={setImageAndTag}
            imageAndTag={imageAndTag!}
            handleStep={handleStep}
          />
        </Funnel.Steps>
        <Funnel.Steps name="게시하기">
          <WriteOOTD
            imageAndTag={imageAndTag!}
            gender={gender}
            setGender={setGender}
            string={string}
            setString={setString}
            style={style}
            setStyle={setStyle}
            open={open}
            setOpen={setOpen}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </Funnel.Steps>
      </Funnel>
    </div>
  );
};

export default AddOOTD;

AddOOTD.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

AddOOTD.Layout.displayName = 'AddOOTDLayout';

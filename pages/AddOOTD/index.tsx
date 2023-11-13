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
import { Headline3 } from '@/components/UI';
import { useRouter } from 'next/router';

const AddOOTD: ComponentWithLayout = () => {
  const steps = ['사진등록', '의류태그', '게시글작성'];
  const [Funnel, currentStep, handleStep] = useFunnel(steps);
  const [imageAndTag, setImageAndTag] = useState<ImageWithTag>();

  useEffect(() => {
    console.log(imageAndTag);
  }, [imageAndTag]);

  const router = useRouter();

  const onClickAppbarButton = () => {
    if (currentStep === '사진등록') {
      router.push('/name');
    } else if (currentStep === '의류태그') {
      handleStep('게시글작성');
    } else {
      handleStep('의류태그');
    }
  };

  const LeftPropsContent = () => {
    if (currentStep === '사진등록') {
      return <AiOutlineClose onClick={onClickAppbarButton} />;
    } else {
      return <AiOutlineArrowLeft onClick={onClickAppbarButton} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <AppBar
        leftProps={<LeftPropsContent />}
        middleProps={<Headline3>{currentStep}</Headline3>}
        rightProps={<></>}
      />
      <Funnel>
        <Funnel.Steps name="사진등록">
          {/* <Gallery /> */}
          <ClothTag setImageAndTag={setImageAndTag} handleStep={handleStep} />
        </Funnel.Steps>
        <Funnel.Steps name="의류태그">
          <ClothTag setImageAndTag={setImageAndTag} handleStep={handleStep} />
        </Funnel.Steps>
        <Funnel.Steps name="게시글작성">
          <WriteOOTD />
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

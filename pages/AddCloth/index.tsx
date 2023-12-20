import { ImageWithTag } from '@/components/AddItem/TagModal';
import AppBar from '@/components/Appbar';
import Gallery from '@/components/Gallery/';
import { Headline3 } from '@/components/UI';
import { useFunnel } from '@/hooks/use-funnel';
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import BasicInfoFirst from './BasicInfoFirst';
import { ComponentWithLayout } from '../sign-up';
import { AppLayoutProps } from '@/AppLayout';
import BasicInfoSecond from './BasicInfoSecond';
import AdditionalInfo from './AdditionalInfo';

export type ClothColor = {
  name: string;
  color: string;
}[];

export interface ClothWhereBuy {
  letter: string;
  type: 'link' | 'write';
}

const AddCloth: ComponentWithLayout = () => {
  const steps = ['사진선택', '기본정보1', '기본정보2', '추가정보'];
  const [Funnel, currentStep, handleStep] = useFunnel(steps);
  const [clothImage, setClothImage] = useState<
    string | ImageWithTag | undefined
  >();

  const [clothCategory, setClothCategory] = useState<string>('');
  const [clothBrand, setClothBrand] = useState<string>('');
  const [clothWhereBuy, setClothWhereBuy] = useState<ClothWhereBuy>({
    letter: '',
    type: 'write',
  });
  const [clothColor, setClothColor] = useState<ClothColor>([]);
  const [clothSize, setClothSize] = useState<string>('');
  const [open, setOpen] = useState('공개');
  const [clothByName, setClothByName] = useState('');
  const [clothBuyDate, setClothBuyDate] = useState('');
  const [clothMemo, setClothMemo] = useState('');
  const [bigCategory, smallCategory] = clothCategory.split(',');

  const onClickSubmitButton = () => {
    //옷 등록 api
    alert(
      `${bigCategory}, 
      ${smallCategory}, 
      ${clothBrand}, 
      ${clothColor}, 
      ${clothImage}, 
      ${clothWhereBuy}, 
      ${open}
      ${clothByName}
      ${clothMemo}
      ${clothBuyDate}
      `
    );
  };

  return (
    <Funnel>
      <AppBar
        leftProps={<AiOutlineArrowLeft />}
        middleProps={<Headline3>의류등록</Headline3>}
        rightProps={<></>}
      />
      <Funnel.Steps name="사진선택">
        <Gallery
          setImageAndTag={setClothImage}
          imageAndTag={clothImage!}
          handleStep={handleStep}
          nextStep="기본정보1"
          item="Cloth"
        />
      </Funnel.Steps>
      <Funnel.Steps name="기본정보1">
        <BasicInfoFirst
          clothImage={clothImage}
          clothCategory={clothCategory}
          clothBrand={clothBrand}
          clothWhereBuy={clothWhereBuy!}
          setClothCategory={setClothCategory}
          setClothBrand={setClothBrand}
          setClothWhereBuy={setClothWhereBuy}
          handleStep={handleStep}
        />
      </Funnel.Steps>
      <Funnel.Steps name="기본정보2">
        <BasicInfoSecond
          clothImage={clothImage}
          clothCategory={clothCategory}
          clothBrand={clothBrand}
          clothWhereBuy={clothWhereBuy!}
          handleStep={handleStep}
          clothColor={clothColor}
          setClothColor={setClothColor}
          clothSize={clothSize}
          setClothSize={setClothSize}
          open={open}
          setOpen={setOpen}
        />
      </Funnel.Steps>
      <Funnel.Steps name="추가정보">
        <AdditionalInfo
          clothBrand={clothBrand}
          clothCategory={clothCategory}
          clothImage={clothImage}
          clothByName={clothByName}
          setClothByName={setClothByName}
          setClothBuyDate={setClothBuyDate}
          setClothMemo={setClothMemo}
          onClickSubmitButton={onClickSubmitButton}
        />
      </Funnel.Steps>
    </Funnel>
  );
};

export default AddCloth;

AddCloth.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

AddCloth.Layout.displayName = 'AddClothLayout';
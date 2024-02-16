import AppBar from '@/components/Appbar';
import { Button3, Title1 } from '@/components/UI';
import { useFunnel } from '@/hooks/use-funnel';
import { useEffect, useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import { ComponentWithLayout } from '../sign-up';
import { AppLayoutProps } from '@/AppLayout';
import { useRouter } from 'next/router';
import { ImageWithTag } from '@/components/Domain/AddOOTD/TagModal';
import { CategoryListType } from '@/components/Domain/AddCloth/ClothCategoryModal';
import { ColorListType } from '@/components/ColorList';
import { BrandType } from '@/components/BrandList/Brand';
import { SizeItem } from '@/components/Domain/AddCloth/ClothSizeModal';
import BasicInfo from './BasicInfo';

export interface ClothWhereBuy {
  letter: string;
  type: 'link' | 'write';
}

const EditCloth: ComponentWithLayout = () => {
  const router = useRouter();
  const steps = ['기본정보', '추가정보'];
  const [Funnel, currentStep, handleStep] = useFunnel(steps);

  const [clothImage, setClothImage] = useState<ImageWithTag | undefined>([
    {
      ootdId: 0,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
  ]);
  const [clothName, setClothName] = useState<string>('');
  const [clothCategory, setClothCategory] = useState<CategoryListType[] | null>(
    null
  );
  const [clothBrand, setClothBrand] = useState<BrandType[] | null>(null);
  const [clothWhereBuy, setClothWhereBuy] = useState<ClothWhereBuy>({
    letter: '',
    type: 'link',
  });
  const [clothColor, setClothColor] = useState<ColorListType | null>(null);
  const [clothSize, setClothSize] = useState<SizeItem | null>(null);
  const [clothOpen, setClothOpen] = useState<Boolean>(true);
  const [clothBuyDate, setClothBuyDate] = useState('');
  const [clothMemo, setClothMemo] = useState('');

  useEffect(() => {
    setClothName('나이키');
    setClothBrand([{ id: 697, name: '허그본' }]);
    setClothWhereBuy({ type: 'link', letter: 'www.musinsa.com' });
    setClothColor([
      { id: 1, name: '버건디', colorCode: '#BB193E', state: true },
    ]);
    setClothSize({ id: 1, name: 'FREE' });
    setClothCategory([
      { id: 1, name: '외투', detailCategories: [{ id: 10, name: '재킷' }] },
    ]);
    setClothOpen(false);
  }, []);

  const onClickSubmitButton = () => {
    //옷 등록 api
  };

  const onClickCancle = () => {
    router.push(`/DetailCloth`);
  };

  return (
    <Funnel>
      <AppBar
        leftProps={<Button3 onClick={onClickCancle}>취소</Button3>}
        middleProps={<Title1>수정하기</Title1>}
        rightProps={<></>}
      />
      <Funnel.Steps name="기본정보">
        <BasicInfo
          clothName={clothName}
          clothImage={clothImage}
          clothCategory={clothCategory}
          clothBrand={clothBrand}
          clothWhereBuy={clothWhereBuy}
          clothColor={clothColor}
          clothSize={clothSize}
          clothOpen={clothOpen}
          setClothImage={setClothImage}
          setClothName={setClothName}
          setClothCategory={setClothCategory}
          setClothBrand={setClothBrand}
          setClothWhereBuy={setClothWhereBuy}
          setClothColor={setClothColor}
          setClothSize={setClothSize}
          setClothOpen={setClothOpen}
          handleStep={handleStep}
          onClickSubmitButton={onClickSubmitButton}
        />
      </Funnel.Steps>
      <Funnel.Steps name="추가정보">
        <AdditionalInfo
          clothBuyDate={clothBuyDate}
          clothMemo={clothMemo}
          clothImage={clothImage}
          setClothImage={setClothImage}
          setClothBuyDate={setClothBuyDate}
          setClothMemo={setClothMemo}
          onClickSubmitButton={onClickSubmitButton}
          handleStep={handleStep}
        />
      </Funnel.Steps>
    </Funnel>
  );
};

export default EditCloth;

EditCloth.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

EditCloth.Layout.displayName = 'EditClothLayout';

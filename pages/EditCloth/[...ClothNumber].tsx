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
import ClothApi from '@/apis/domain/Cloth/ClothApi';

export interface ClothWhereBuy {
  letter: string;
  type: 'Link' | 'Write';
}

const EditCloth: ComponentWithLayout = () => {
  const router = useRouter();
  const steps = ['기본정보', '추가정보'];
  const [Funnel, currentStep, handleStep] = useFunnel(steps);

  const [clothImage, setClothImage] = useState<ImageWithTag | undefined>();
  const [clothName, setClothName] = useState<string>('');
  const [clothCategory, setClothCategory] = useState<CategoryListType[] | null>(
    null
  );
  const [clothBrand, setClothBrand] = useState<BrandType[] | null>(null);
  const [clothWhereBuy, setClothWhereBuy] = useState<ClothWhereBuy>({
    letter: '',
    type: 'Link',
  });
  const [clothColor, setClothColor] = useState<ColorListType | null>(null);
  const [clothSize, setClothSize] = useState<SizeItem | null>(null);
  const [clothOpen, setClothOpen] = useState<Boolean>(true);
  const [clothBuyDate, setClothBuyDate] = useState('');
  const [clothMemo, setClothMemo] = useState('');

  const { getClothDetail, putCloth } = ClothApi();

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      const result = await getClothDetail(Number(router.query.ClothNumber![0]));
      setClothName(result.name);
      setClothBrand([result.brand]);
      setClothSize(result.size);
      setClothWhereBuy({
        type: result.purchaseStoreType,
        letter: result.purchaseStore,
      });
      setClothColor(result.colors);
      setClothOpen(result.isOpen);
      setClothImage([{ ootdId: 1, ootdImage: result.imageUrl }]);
    };
    fetchData();
  }, [router.isReady]);

  useEffect(() => {
    setClothCategory([
      { id: 1, name: '외투', detailCategories: [{ id: 10, name: '재킷' }] },
    ]);
  }, []);

  const onClickSubmitButton = async () => {
    //옷 등록 api
    const payload = {
      purchaseStore: clothWhereBuy.letter,
      purchaseStoreType: clothWhereBuy.type,
      brandId: clothBrand![0].id,
      categoryId: clothCategory![0].detailCategories![0].id,
      colorIds: [...clothColor!].map((item) => item.id),
      isOpen: clothOpen,
      sizeId: clothSize!.id,
      clothesImageUrl: clothImage![0].ootdImage,
      name: clothName,
      purchaseDate: clothBuyDate,
    };
    const result = await putCloth(
      Number(router.query.ClothNumber![0]),
      payload
    );
    console.log(result);
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

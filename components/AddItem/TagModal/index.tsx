import SearchBar from '@/components/SearchBar';
import S from './style';
import ClothInformation from '@/components/ClothInformation';
import { ClothInformationProps } from '@/components/ClothInformation/type';
import { Dispatch, SetStateAction, useState } from 'react';
import TabView from '@/components/TabView';
import { Button1 } from '@/components/UI';
import Modal from '@/components/Modal';

const ClothInformationSampleData = [
  {
    clothId: 1,
    size: 'big',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    headline: 'Adidas',
    bodyFirst: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
  },
  {
    clothId: 2,
    size: 'big',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    headline: 'Nike',
    bodyFirst: '나이키 하의',
    state: 'light',
    icon: 'like',
  },
  {
    clothId: 3,
    size: 'big',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    headline: 'Adidas',
    bodyFirst: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
  },
  {
    clothId: 4,
    size: 'big',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    headline: 'Nike',
    bodyFirst: '나이키 하의',
    state: 'light',
    icon: 'like',
  },
  {
    clothId: 5,
    size: 'big',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    headline: 'Adidas',
    bodyFirst: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
  },
  {
    clothId: 6,
    size: 'big',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    headline: 'Nike',
    bodyFirst: '나이키 하의',
    state: 'light',
    icon: 'like',
  },
] as [...ClothInformationProps[]];

export type ImageWithTag = {
  ootdImage: string;
  tag?: {
    clothId: number;
    clothImage: string;
    xRate: string;
    yRate: string;
    caption: string;
    headline: string;
    bodyFirst: string;
    state: string;
    deviceWidth?: number;
    deviceHeight?: number;
  }[];
}[];

interface AddTagProps {
  setAddTag: Dispatch<SetStateAction<Boolean>>;
  addTag: Boolean;
  setImageAndTag: Dispatch<SetStateAction<ImageWithTag | undefined | string>>;
  imageAndTag: ImageWithTag | string;
  slideIndex: number;
}

export default function AddTag({
  setAddTag,
  addTag,
  setImageAndTag,
  imageAndTag,
  slideIndex,
}: AddTagProps) {
  const categoryList = ['외투', '상의', '하의', '한벌옷', '신발'];

  const [clicked, setClicked] = useState<number>(0);

  const onClickCategory = (index: number) => {
    setClicked(index);
  };

  //태그 추가
  const onClickClothInformation = (index: number) => {
    if (typeof imageAndTag !== 'string') {
      const newTag = [...imageAndTag];
      if (newTag[slideIndex].tag) {
        newTag[slideIndex].tag?.push({
          clothId: ClothInformationSampleData[index].clothId,
          clothImage: ClothInformationSampleData[index].clothImage,
          headline: ClothInformationSampleData[index].headline,
          bodyFirst: ClothInformationSampleData[index].bodyFirst,
          xRate: '0',
          yRate: '0',
          caption: '',
          state: 'light',
        });
      } else {
        newTag[slideIndex].tag = [
          {
            clothId: ClothInformationSampleData[index].clothId,
            clothImage: ClothInformationSampleData[index].clothImage,
            headline: ClothInformationSampleData[index].headline,
            bodyFirst: ClothInformationSampleData[index].bodyFirst,
            xRate: '0',
            yRate: '0',
            caption: '',
            state: 'light',
          },
        ];
      }

      setImageAndTag(newTag);
      setAddTag(false);
    }
  };

  const MyCloset = () => {
    return (
      <S.MyCloset>
        <SearchBar placeholder="Hinted search text" />
        <S.Category>
          {categoryList.map((item, index) => {
            return (
              <S.CategorySpan
                state={index === clicked}
                key={index}
                onClick={() => onClickCategory(index)}
              >
                <Button1>{item}</Button1>
              </S.CategorySpan>
            );
          })}
        </S.Category>
        <S.List>
          {ClothInformationSampleData.map((item, index) => {
            return (
              <>
                <div onClick={() => onClickClothInformation(index)} key={index}>
                  <ClothInformation
                    clothId={item.clothId}
                    size={item.size}
                    clothImage={item.clothImage}
                    caption=""
                    headline={item.headline}
                    subHeadline={item.subHeadline}
                    bodyFirst={item.bodyFirst}
                    bodySecond={item.bodySecond}
                    icon={item.icon}
                  />
                </div>
                <hr />
              </>
            );
          })}
        </S.List>
      </S.MyCloset>
    );
  };

  const AddNewCloth = () => {
    return <div>신규 등록 페이지</div>;
  };

  return (
    <>
      <S.Background onClick={() => setAddTag(false)} addTag={addTag} />
      <Modal height="80%" isOpen={addTag}>
        <S.Layout>
          <TabView>
            <TabView.TabBar tab={['내 옷장', '신규 등록']} />
            <TabView.Tabs>
              <TabView.Tab>
                <MyCloset />
              </TabView.Tab>
              <TabView.Tab>
                <AddNewCloth />
              </TabView.Tab>
            </TabView.Tabs>
          </TabView>
        </S.Layout>
      </Modal>
    </>
  );
}

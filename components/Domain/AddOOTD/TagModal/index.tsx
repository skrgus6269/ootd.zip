import SearchBar from '@/components/SearchBar';
import S from './style';
import ClothInformation from '@/components/ClothInformation';
import { ClothInformationProps } from '@/components/ClothInformation/type';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TabView from '@/components/TabView';
import { Body4 } from '@/components/UI';
import Modal from '@/components/Modal';
import NewRegister from './NewRegister';

const ClothInformationSampleData = [
  {
    clothId: 1,
    size: 'Free',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    brand: 'Adidas',
    name: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
    category: '상의',
  },
  {
    clothId: 2,
    size: 'Free',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    brand: 'Adidas',
    name: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
    category: '상의',
  },
  {
    clothId: 3,
    size: 'Free',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    brand: 'Adidas',
    name: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
    category: '상의',
  },
  {
    clothId: 4,
    size: 'Free',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    brand: 'Adidas',
    name: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
    category: '상의',
  },
  {
    clothId: 5,
    size: 'Free',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    brand: 'Adidas',
    name: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
    category: '상의',
  },
  {
    clothId: 6,
    size: 'Free',
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    brand: 'Adidas',
    name: '전북 현대 유니폼',
    state: 'dark',
    icon: 'like',
    category: '상의',
  },
] as [...ClothInformationProps[]];

export type ImageWithTag = {
  ootdId: number;
  ootdImage: string;
  ootdImageClothesList?: {
    clothesId: number;
    clothesImage: string;
    coordinate: { xrate: string; yrate: string };
    deviceSize: { deviceWidth: number; deviceHeight: number };
    caption: string;
    size?: string;
    state?: string;
    name?: string;
    brand?: string;
    category?: string;
  }[];
}[];

interface AddTagProps {
  setAddTag: Dispatch<SetStateAction<Boolean>>;
  addTag: Boolean;
  setImageAndTag: Dispatch<SetStateAction<ImageWithTag | undefined>>;
  imageAndTag: ImageWithTag | undefined;
  slideIndex: number;
}

export default function AddTag({
  setAddTag,
  addTag,
  setImageAndTag,
  imageAndTag,
  slideIndex,
}: AddTagProps) {
  const [searchResult, setSearchResult] = useState();
  const categoryList = ['외투', '상의', '하의', '한벌옷', '신발'];
  const [letter, setLetter] = useState<string>('');
  const [clicked, setClicked] = useState<number | null>();

  const onClickCategory = (index: number) => {
    if (clicked === index) {
      setClicked(null);
      return;
    }
    setClicked(index);
  };

  //태그 추가
  const onClickClothInformation = (index: number) => {
    if (imageAndTag) {
      const newTag = JSON.parse(JSON.stringify(imageAndTag));

      if (newTag[slideIndex].ootdImageClothesList) {
        newTag[slideIndex].ootdImageClothesList?.push({
          clothesId: ClothInformationSampleData[index].clothId,
          clothesImage: ClothInformationSampleData[index].clothImage,
          brand: ClothInformationSampleData[index].brand,
          name: ClothInformationSampleData[index].name,
          coordinate: {
            xrate: '0',
            yrate: '0',
          },
          caption: '',
          state: 'light',
        });
      } else {
        newTag[slideIndex].ootdImageClothesList = [
          {
            clothesId: ClothInformationSampleData[index].clothId,
            clothesImage: ClothInformationSampleData[index].clothImage,
            brand: ClothInformationSampleData[index].brand,
            name: ClothInformationSampleData[index].name,
            coordinate: {
              xrate: '0',
              yrate: '0',
            },
            caption: '',
            state: 'light',
          },
        ];
      }

      setImageAndTag(newTag);
      setAddTag(false);
    }
  };

  return (
    <>
      <S.Background onClick={() => setAddTag(false)} addTag={addTag} />
      <Modal height="80" isOpen={addTag}>
        <S.Layout>
          <TabView>
            <TabView.TabBar tab={['내 옷장', '신규 등록']} display="block" />
            <TabView.Tabs>
              <TabView.Tab>
                <S.MyCloset>
                  <SearchBar
                    letter={letter}
                    setLetter={setLetter}
                    placeholder="이름, 카테고리 등"
                  />
                  <S.SearchFilter>
                    <S.IsOpenSpan state={true}>
                      <Body4 state="emphasis">공개</Body4>
                    </S.IsOpenSpan>
                    <S.IsOpenSpan state={false}>
                      <Body4 state="emphasis">비공개</Body4>
                    </S.IsOpenSpan>
                    <S.Divider />
                    <S.Category>
                      {categoryList.map((item, index) => {
                        return (
                          <S.CategorySpan
                            onTouchStart={(e) => e.stopPropagation()}
                            onTouchEnd={() => onClickCategory(index)}
                            state={index === clicked}
                            key={index}
                          >
                            <Body4 state="emphasis">{item}</Body4>
                          </S.CategorySpan>
                        );
                      })}
                    </S.Category>
                  </S.SearchFilter>
                  <S.List>
                    {ClothInformationSampleData.map((item, index) => {
                      return (
                        <>
                          <div
                            onClick={() => onClickClothInformation(index)}
                            key={index}
                          >
                            <ClothInformation
                              clothId={item.clothId}
                              size="small"
                              clothImage={item.clothImage}
                              caption="옷"
                              brand={item.brand}
                              category={item.category}
                              name={item.name}
                              clothSize={item.size}
                            />
                          </div>
                          <hr />
                        </>
                      );
                    })}
                  </S.List>
                </S.MyCloset>
              </TabView.Tab>
              <TabView.Tab>
                <NewRegister imageAndTag={imageAndTag} />
              </TabView.Tab>
            </TabView.Tabs>
          </TabView>
        </S.Layout>
      </Modal>
    </>
  );
}

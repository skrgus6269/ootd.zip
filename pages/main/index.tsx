import ClothInformation from '@/components/ClothInformation';
import TagInformation from '@/components/ClothInformation/TagInformation';
import { ClothInformationProps } from '@/components/ClothInformation/type';

const ClothInformationSampleData = [
  {
    size: 'big',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'big',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'small',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'big',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'bell',
  },
] as [...ClothInformationProps[]];

const TagClothInformationSampleData = [
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    state: 'light',
  },
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    BodySecond: 'body3',
    state: 'light',
  },
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    state: 'dark',
  },
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    BodySecond: 'body3',
    state: 'dark',
  },
] as [...ClothInformationProps[]];

export default function Main() {
  return (
    <>
      {ClothInformationSampleData.map((item, index) => {
        return (
          <ClothInformation
            size={item.size}
            itemImage={item.itemImage}
            caption={item.caption}
            Headline={item.Headline}
            SubHeadline={item.SubHeadline}
            BodyFirst={item.BodyFirst}
            BodySecond={item.BodySecond}
            icon={item.icon}
            key={index}
          />
        );
      })}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexDirection: 'column',
          backgroundColor: 'darkgrey',
          width: '200px',
          height: '300px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {TagClothInformationSampleData.map((item, index) => {
          return (
            <TagInformation
              itemImage={item.itemImage}
              caption=""
              key={index}
              Headline={item.Headline}
              BodyFirst={item.BodyFirst}
              BodySecond={item.BodySecond}
              state={item.state}
            />
          );
        })}
      </div>
    </>
  );
}

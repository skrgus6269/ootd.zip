import { systemApi } from '@/apis';

const sampleClothCategory = [
  {
    bigCategory: '외투',
    smallCategory: [
      '패딩',
      '코트',
      '재킷',
      '무스탕',
      '폴리스',
      '점퍼',
      '바람막이',
      '패딩',
      '코트',
      '재킷',
      '무스탕',
      '폴리스',
      '점퍼',
      '바람막이',
    ],
  },
  {
    bigCategory: '상의',
    smallCategory: [
      '긴소매 티셔츠',
      '반소매 티셔츠',
      '셔츠',
      '후디',
      '스웨트셔츠/맨투맨',
      '슬리브리스',
      '피케/카라',
    ],
  },
  {
    bigCategory: '상의',
    smallCategory: [
      '긴소매 티셔츠',
      '반소매 티셔츠',
      '셔츠',
      '후디',
      '스웨트셔츠/맨투맨',
      '슬리브리스',
      '피케/카라',
    ],
  },
];

export const getClothCategory = async () => {
  const data = await systemApi.getClothCategory();

  return sampleClothCategory;
};

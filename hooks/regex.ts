// 한글 초성 단독 사용 불가
export const hasKoreanInitial = (value: string) =>
  /[ㄱ-ㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅢㅟㅚㅞㅝ]/g.test(value);

// 특수문자 사용 단독사용 불가
export const hasSpecialCharacter = (value: string) =>
  /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/g.test(value) &&
  value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/g)!.length === value.length;

// 글자수가 12자 보다 적어야한다
export const isMoreThan12Length = (value: string) => value?.length > 12;

// 글자수가 2자보다 많아야한다
export const isMoreThan2Length = (value: string) => value?.length < 2;

//욕설을 포함하면 사용 불가
const 욕설리스트 = [
  '간나',
  '개년, 개돼지, 개새끼, 개쓰레기, 개소리, 개씹, 개좆, 개자식',
  '걸레',
  '게이',
  '고자',
  '꺼져',
  '남창',
  '니애미',
  '니미',
  '니애비',
  '니기미',
  '닥쳐',
  '쓰레기',
  '머저리',
  '미친',
  '변태',
  '병신',
  '시발',
  '새끼',
  '씨발',
  '씹',
  '아가리',
  '염병',
  '장애인',
  '좆',
  '지랄',
  '호구',
];

export const badNickname = (value: string) => {
  let flag = true;

  for (let i = 0; i < 욕설리스트.length; i++) {
    if (value?.includes(욕설리스트[i])) flag = false;
  }
  return !flag;
};

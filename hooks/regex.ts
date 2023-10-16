// 한글 초성 단독 사용 불가
export const hasKoreanInitial = (value: string) => /[ㄱ-ㅎ]/g.test(value);

// 특수문자 사용 불가
export const hasSpecialCharacter = (value: string) =>
  /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/g.test(value);

// 글자수가 12자 보다 많다면 true
export const isMoreThan12Length = (value: string) => value.length > 12;

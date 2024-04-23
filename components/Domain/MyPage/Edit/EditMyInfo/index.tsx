import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import S from './style';
import { Body3 } from '@/components/UI';
import HelperText from '@/components/Input/HelperText';
import Input from '@/components/Input';
import SwitchToggle from '@/components/Toggle/SwitchToggle';
import {
  hasKoreanInitial,
  hasSpecialCharacter,
  isMoreThan12Length,
  isMoreThan2Length,
  badNickname,
} from '@/hooks/regex';
import {
  HELPER_TEXT_KOREAN_INITIAL,
  HELPER_TEXT_VALID,
  HELPER_TEXT_SPECIAL_CHAR,
  HELPER_TEXT_12_LENGTH,
  HELPER_TEXT_NULL,
  NICKNAME_PLACEHODER,
  HELPER_TEXT_2_LENGTH,
  HELPER_TEXT_BAD_NICKNAME,
  HELPER_TEXT_EXIST_SAMEID,
} from '@/constants/business.constants';
import { RegisterApi } from '@/apis/domain/Register/RegisterApi';

interface MyInfoProps {
  nickName: string;
  setNickName: Dispatch<SetStateAction<string>>;
  introduction: string;
  setIntroduction: Dispatch<SetStateAction<string>>;
  height: string;
  setHeight: Dispatch<SetStateAction<string>>;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  open: Boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
  possible: Boolean;
  setPossible: Dispatch<SetStateAction<Boolean>>;
}

export default function EditMyInfo({
  nickName,
  setNickName,
  introduction,
  setIntroduction,
  height,
  setHeight,
  weight,
  setWeight,
  open,
  setOpen,
  possible,
  setPossible,
}: MyInfoProps) {
  const [helperText, setHelperText] = useState<string>('입력해주세요');
  const [state, setState] = useState<number>(1);
  const { checkName } = RegisterApi();

  const updateHelperText = (text: string, newState: number) => {
    setHelperText(text);
    setState(newState);
  };

  const checkNameApi = (name: string) => {
    const fetchCheckName = async () => {
      const result = await checkName(name);

      return result;
    };

    return fetchCheckName();
  };

  const [canUseId, setCanUseId] = useState<Boolean>(false);

  const idInputValidity = async (value: string) => {
    if (value !== undefined && value.length === 0) {
      updateHelperText(HELPER_TEXT_NULL, 1);
      setCanUseId(false);
    } else if (hasKoreanInitial(value)) {
      updateHelperText(HELPER_TEXT_KOREAN_INITIAL, 2);
      setCanUseId(false);
    } else if (hasSpecialCharacter(value)) {
      updateHelperText(HELPER_TEXT_SPECIAL_CHAR, 2);
      setCanUseId(false);
    } else if (isMoreThan12Length(value)) {
      updateHelperText(HELPER_TEXT_12_LENGTH, 2);
      setCanUseId(false);
    } else if (isMoreThan2Length(value)) {
      updateHelperText(HELPER_TEXT_2_LENGTH, 2);
      setCanUseId(false);
    } else if (badNickname(value)) {
      updateHelperText(HELPER_TEXT_BAD_NICKNAME, 2);
      setCanUseId(false);
    } else {
      if (await checkNameApi(value)) {
        updateHelperText(HELPER_TEXT_VALID, 3);
        setCanUseId(true);
        return;
      }
      updateHelperText(HELPER_TEXT_EXIST_SAMEID, 2);
      setCanUseId(false);
    }
  };

  useEffect(() => {
    if (
      nickName === '' ||
      height === '0' ||
      weight === '0' ||
      height === '' ||
      weight === ''
    ) {
      setPossible(true);
    } else {
      setPossible(false);
    }
  }, [nickName, weight, height]);

  return (
    <>
      <S.Layout>
        <S.Category>
          <Input>
            <Input.Label className="title" size="small">
              닉네임
            </Input.Label>
            <Input.Text
              state={nickName === '' ? false : true}
              defaultValue={nickName}
              size="big"
              line="outline"
              onChange={setNickName}
              validity={idInputValidity}
            />
            {nickName?.length === 0 || state === 3 ? (
              <div className="hidden">
                <Input.HelperText className="helperText" state={state}>
                  {helperText}
                </Input.HelperText>
              </div>
            ) : (
              <Input.HelperText className="helperText" state={state}>
                {helperText}
              </Input.HelperText>
            )}
          </Input>
        </S.Category>
        <S.Category>
          <Input>
            <Input.Label className="title" size="small">
              소개
            </Input.Label>
            <Input.Text
              state={true}
              defaultValue={introduction}
              size="big"
              line="outline"
              onChange={setIntroduction}
            />
          </Input>
        </S.Category>
        <S.BodyInfo>
          <S.Category>
            <Input>
              <Input.Label className="title" size="small">
                신장
              </Input.Label>
              <Input.Text
                state={height === '' || height === '0' ? false : true}
                defaultValue={height}
                size="small"
                line="outline"
                unit="CM"
                type="number"
                onChange={setHeight}
              />
            </Input>
          </S.Category>
          <S.Category>
            <Input>
              <Input.Label className="title" size="small">
                체중
              </Input.Label>
              <Input.Text
                state={weight === '' || weight === '0' ? false : true}
                defaultValue={weight}
                size="small"
                line="outline"
                unit="KG"
                type="number"
                onChange={setWeight}
              />
            </Input>
          </S.Category>
        </S.BodyInfo>
      </S.Layout>

      <S.OpenStatus>
        <S.Wrap>
          <Body3>체형정보 공개</Body3>
          <SwitchToggle state={open} setState={setOpen} />
        </S.Wrap>
        <HelperText state={3}>
          {open
            ? '다른 사람에게 내 체형정보가 표시됩니다.'
            : '다른 사람에게 내 체형정보가 표시되지 않습니다.'}
        </HelperText>
      </S.OpenStatus>

      <S.StateLayout>
        {!possible && (
          <HelperText state={2}>
            닉네임, 신장, 체중은 필수정보입니다.
          </HelperText>
        )}
      </S.StateLayout>
    </>
  );
}

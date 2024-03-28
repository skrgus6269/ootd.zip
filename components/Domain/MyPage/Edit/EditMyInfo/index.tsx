import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import S from './style';
import { Body3 } from '@/components/UI';
import HelperText from '@/components/Input/HelperText';
import Input from '@/components/Input';
import SwitchToggle from '@/components/Toggle/SwitchToggle';

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
  const [commentState, setCommentState] = useState<Boolean>(false);

  useEffect(() => {
    if (nickName === '') {
      // input의 상태 추가
    }

    if (height === '0' || height === '') {
      // input의 상태 추가
    }

    if (weight === '0' || weight === '') {
      // input의 상태 추가
    }

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
            />
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

import Image from 'next/image';
import S from './style';
import CheckBoxTrue from 'public/images/checkBoxTrue.png';
import CheckBoxFalse from 'public/images/checkBoxFalse.png';
import { useState } from 'react';
import { BookmarkListType } from '@/pages/Bookmark';
import { Dispatch, SetStateAction, useEffect } from 'react';

export type dataType = {
  pages: BookmarkListType[];
  pageParams: any;
};

interface ImageCheckBoxListProps {
  data: dataType | undefined;
  checkBox: Boolean;
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
}

export default function ImageCheckBoxList({
  data,
  checkBox,
  checkedItems,
  setCheckedItems,
}: ImageCheckBoxListProps) {
  const toggleChecked = (clothId: number) => {
    if (checkedItems.includes(clothId)) {
      setCheckedItems(checkedItems.filter((id) => id !== clothId));
    } else {
      setCheckedItems([...checkedItems, clothId]);
    }
  };

  return (
    <S.Layout>
      {data &&
        data.pages.map((onePage) => {
          return onePage.content.map((item) => {
            const isChecked = checkedItems.includes(item.ootdId);

            return (
              <S.CheckBoxLayout key={item.ootdId}>
                <img
                  src={item.ootdImage}
                  alt=""
                  className={`clothImage ${isChecked ? 'checked' : ''}`}
                />
                {checkBox && (
                  <Image
                    src={isChecked ? CheckBoxTrue : CheckBoxFalse}
                    alt={`CheckBox ${isChecked ? 'True' : 'False'}`}
                    className="checkBoxImage"
                    onClick={() => toggleChecked(item.ootdId)}
                  />
                )}
              </S.CheckBoxLayout>
            );
          });
        })}
    </S.Layout>
  );
}

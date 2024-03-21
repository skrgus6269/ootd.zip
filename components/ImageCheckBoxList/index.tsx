import Image from 'next/image';
import S from './style';
import BookmarkCheckBoxTrue from '@/public/images/BookmarkCheckBoxTrue.png';
import BookmarkCheckBoxFalse from '@/public/images/BookmarkCheckBoxFalse.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';

interface ImageCheckBoxListProps {
  data: {
    ootdId?: number;
    ootdBookmarkId?: number;
    ootdImage?: string;
  }[];
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
  const toggleChecked = (ootdBookmarkId: number) => {
    if (checkedItems.includes(ootdBookmarkId)) {
      setCheckedItems(checkedItems.filter((id) => id !== ootdBookmarkId));
    } else {
      setCheckedItems([...checkedItems, ootdBookmarkId]);
    }
  };

  const router = useRouter();

  return (
    <S.Layout>
      {data &&
        data.map((item) => {
          const isChecked = checkedItems.includes(item.ootdBookmarkId!);

          return (
            <S.CheckBoxLayout key={item.ootdBookmarkId}>
              <img
                src={item.ootdImage}
                alt=""
                className={`clothImage ${isChecked ? 'checked' : ''}`}
                onClick={() => router.push(`ootd/${item.ootdId}`)}
              />
              {checkBox && (
                <Image
                  src={isChecked ? BookmarkCheckBoxTrue : BookmarkCheckBoxFalse}
                  alt={`CheckBox ${isChecked ? 'True' : 'False'}`}
                  className="checkBoxImage"
                  onClick={() => toggleChecked(item.ootdBookmarkId!)}
                  width={24}
                  height={24}
                />
              )}
            </S.CheckBoxLayout>
          );
        })}
    </S.Layout>
  );
}

import Image from 'next/image';
import S from './style';
import BookmarkCheckBoxTrue from '@/public/images/BookmarkCheckBoxTrue.png';
import BookmarkCheckBoxFalse from '@/public/images/BookmarkCheckBoxFalse.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';

interface ImageData {
  ootdId?: number;
  ootdBookmarkId?: number;
  ootdImage?: string;
}

interface ImageCheckBoxListProps {
  data: ImageData[];
  checkBox: Boolean;
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
  editing?: Boolean;
}

export default function ImageCheckBoxList({
  data,
  checkBox,
  checkedItems,
  setCheckedItems,
  editing,
}: ImageCheckBoxListProps) {
  const toggleChecked = (ootdBookmarkId: number) => {
    if (checkedItems.includes(ootdBookmarkId)) {
      setCheckedItems(checkedItems.filter((id) => id !== ootdBookmarkId));
    } else {
      setCheckedItems([...checkedItems, ootdBookmarkId]);
    }
  };

  const router = useRouter();

  const handleClick = (item: ImageData) => {
    if (editing) {
      toggleChecked(item.ootdBookmarkId!);
    } else {
      router.push(`ootd/${item.ootdId}`);
    }
  };

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
                onClick={() => handleClick(item)}
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

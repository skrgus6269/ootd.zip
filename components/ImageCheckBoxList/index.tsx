import Image from 'next/image';
import S from './style';
import CheckBoxTrue from 'public/images/checkBoxTrue.png';
import CheckBoxFalse from 'public/images/checkBoxFalse.png';
import { useState } from 'react';

interface ImageCheckBoxListProps {
  data: {
    ootdId: number;
    ootdBookmarkId: number;
    ootdImage: string;
  }[];
  checkBox: Boolean;
}

export default function ImageCheckBoxList({
  data,
  checkBox,
}: ImageCheckBoxListProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

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
        data.map((item, index) => {
          if (item.ootdId !== undefined) {
            const isChecked = checkedItems.includes(item.ootdId);

            return (
              <S.CheckBoxLayout key={index}>
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
          }
        })}
    </S.Layout>
  );
}

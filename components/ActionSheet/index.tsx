import S from './style';
import { Button2 } from '../UI';

interface colorProps {
  buttonClick: () => void;
  name: string;
}

interface ActionSheetProps {
  buttons?: colorProps[];
}

export default function ActionSheet({ buttons }: ActionSheetProps) {
  return (
    <S.Layout>
      {buttons &&
        buttons.map((item, index) => {
          return (
            <S.ButtonWrap
              onClick={item.buttonClick}
              key={index}
              name={item.name}
            >
              <Button2>{item.name}</Button2>
            </S.ButtonWrap>
          );
        })}
    </S.Layout>
  );
}

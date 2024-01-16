import S from './style';
import { Button1 } from '../UI';

interface AlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
  headline: React.ReactNode;
  body: React.ReactNode;
  yes?: string;
  no?: string;
}

export default function Alert({
  onClickYesButton,
  onClickNoButton,
  headline,
  body,
  yes,
  no,
}: AlertProps) {
  return (
    <S.Layout>
      <S.AlertPrompt>
        <S.AlertHeadline>{headline}</S.AlertHeadline>
        <S.AlertBody>{body}</S.AlertBody>
        {yes && no && (
          <S.AlertButton>
            <button onClick={onClickNoButton} className="no">
              <Button1>{yes ? yes : '안할래'}</Button1>
            </button>
            <button onClick={onClickYesButton} className="yes">
              <Button1>{no ? no : '할래'}</Button1>
            </button>
          </S.AlertButton>
        )}
      </S.AlertPrompt>
    </S.Layout>
  );
}

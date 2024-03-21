import S from './style';
import { Body3, Button1, Button2, Button3, Title1 } from '../UI';
import { ReactNode } from 'react';

interface AlertProps {
  onClickYesButton: () => void;
  onClickNoButton: () => void;
  headline: string;
  body: ReactNode;
  yes?: string;
  yesColor?: string;
  no?: string;
  noColor?: string;
}

export default function Alert({
  onClickYesButton,
  onClickNoButton,
  headline,
  body,
  yes,
  yesColor,
  no,
  noColor,
}: AlertProps) {
  return (
    <S.Layout>
      <S.AlertPrompt>
        <S.AlertHeadline>
          <Title1>{headline}</Title1>
        </S.AlertHeadline>
        <S.AlertBody>{body}</S.AlertBody>
        {yes && no && (
          <S.AlertButton yesColor={yesColor} noColor={noColor}>
            <button onClick={onClickNoButton} className="no">
              <Button1>{no}</Button1>
            </button>
            <button onClick={onClickYesButton} className="yes">
              <Button1>{yes}</Button1>
            </button>
          </S.AlertButton>
        )}
      </S.AlertPrompt>
    </S.Layout>
  );
}

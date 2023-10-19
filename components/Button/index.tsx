import { MouseEventHandler } from 'react';
import { LargeButton, SmallButton } from './style';
import { Button1 } from '../UI';

interface ButtonProps {
  children: string;
  size: string;
  backgroundColor: string;
  color: string;
  border: Boolean;
  onClick: MouseEventHandler;
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <LargeButton
        onClick={props.onClick}
        show={props.size === 'big'}
        buttonData={props}
      >
        <Button1>{props.children}</Button1>
      </LargeButton>

      <SmallButton
        onClick={props.onClick}
        show={props.size === 'small'}
        buttonData={props}
      >
        <Button1>{props.children}</Button1>
      </SmallButton>
    </>
  );
}

export type { ButtonProps };

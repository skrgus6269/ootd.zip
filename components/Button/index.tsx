import { MouseEventHandler } from 'react';
import { LargeButton, SmallButton } from './style';
import { Button1 } from '../UI';

interface ButtonProps {
  children: React.ReactNode;
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
        {props.children}
      </LargeButton>

      <SmallButton
        onClick={props.onClick}
        show={props.size === 'small'}
        buttonData={props}
      >
        {props.children}
      </SmallButton>
    </>
  );
}

export type { ButtonProps };

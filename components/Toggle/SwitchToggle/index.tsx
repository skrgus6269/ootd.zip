import React from 'react';
import { ToggleLayout, ToggleContainer, ToggleCircle } from './style';

interface ToggleInterface {
  state: Boolean;
  setState: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function SwitchToggle(props: ToggleInterface) {
  const onClickToggleButton = () => {
    props.setState(!props.state);
  };

  return (
    <ToggleLayout onClick={onClickToggleButton}>
      <ToggleContainer state={props.state} />
      <ToggleCircle state={props.state} />
    </ToggleLayout>
  );
}

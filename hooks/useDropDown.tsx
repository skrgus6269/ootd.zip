import { useState } from 'react';

const useDropdown = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [state, setState] = useState(false);

  const onClickOption = (option: string) => {
    setValue(option);
    setState(false);
  };

  const onClickDefaultOption = () => {
    setState(!state);
  };

  return { value, state, onClickOption, onClickDefaultOption };
};

export default useDropdown;

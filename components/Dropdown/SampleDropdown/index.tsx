import React, { Dispatch, SetStateAction, useEffect } from 'react';
import useDropdown from '@/hooks/useDropDown';
import { Select, Options, DefaultOption, Option } from './style';

interface DropdownProps {
  options: string[];
  setNowOption: Dispatch<SetStateAction<string>>;
}

export default function SampleDropdown({
  options,
  setNowOption,
}: DropdownProps) {
  const { value, state, onClickOption, onClickDefaultOption } = useDropdown(
    options[0]
  );

  useEffect(() => {
    setNowOption(value);
  }, [setNowOption, value]);

  return (
    <Select>
      <DefaultOption onClick={onClickDefaultOption}>{value}</DefaultOption>
      {state && (
        <Options>
          {options.map((option: string, index: React.Key) => (
            <Option key={index} onClick={() => onClickOption(option)}>
              {option}
            </Option>
          ))}
        </Options>
      )}
    </Select>
  );
}

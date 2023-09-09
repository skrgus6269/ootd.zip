import React from 'react';
import useDropdown from '@/hooks/useDropDown';
import { Select, Options, DefaultOption, Option } from './style';

export default function WeightDropdown() {
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ];

  const { value, state, onClickOption, onClickDefaultOption } = useDropdown(
    options[0]
  );

  const dropdown = (
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

  return [dropdown, value];
}

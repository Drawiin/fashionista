import { useState } from 'react';

export default function useTextInput(onTextChange) {
  const [value, setValue] = useState('');

  function updateValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
    onTextChange(newValue);
  }

  return [value, updateValue];
}

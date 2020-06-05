import { useState } from 'react';

export default function useTextInput() {
  const [value, setValue] = useState('');

  function updateValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return [value, updateValue];
}

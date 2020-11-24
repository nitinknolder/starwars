import { useState, useCallback } from 'react';

const useCustomInputField = (initialValue) =>  {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(function(event) {
    setValue(event.target.value);
  }, []);
  return { value, onChange };
}

export default useCustomInputField;

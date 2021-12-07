import { useState, ChangeEvent } from "react";

const useInput = (initVal = ""): [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [val, setVal] = useState(initVal);  
  const updateVal = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVal(e.target.value);
  }
  const resetVal = () => setVal(initVal);
  return [val, updateVal, resetVal];
}

export default useInput;
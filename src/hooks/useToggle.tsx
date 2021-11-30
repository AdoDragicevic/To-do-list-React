import { useState } from "react";

const useToggle = (initVal = true): [boolean, () => void] => {
  const [bool, setBool] = useState(initVal);
  const toggle = () => setBool(!bool);
  return [bool, toggle];
}

export default useToggle;
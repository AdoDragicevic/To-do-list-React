import { useState } from "react";

const useToggle = (initVal = true) => {
  const [bool, setBool] = useState(initVal);
  const toggle = () => setBool(!bool);
  return [bool, toggle];
}

export default useToggle;
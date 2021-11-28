import { useState } from "react";

const useSetAndResetState = (initVal: any) => {
  const [val, setVal] = useState(initVal);
  const resetVal = () => setVal(initVal);
  return [val, setVal, resetVal];
}

export default useSetAndResetState;